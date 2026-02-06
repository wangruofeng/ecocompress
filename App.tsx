import React, { useState, useEffect } from 'react';
import { ProcessedImage, CompressionSettings } from './types';
import { generateId } from './utils/helpers';
import { compressImage } from './utils/compressor';
import Header from './components/Header';
import Dropzone from './components/Dropzone';
import SettingsPanel from './components/SettingsPanel';
import ImageCard from './components/ImageCard';
import PreviewModal from './components/PreviewModal';
import { DownloadIcon, LoadingIcon, DeleteIcon } from './components/Icon';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';

const STORAGE_KEY = 'img_compress_settings';
const DEFAULT_SETTINGS: CompressionSettings = {
  quality: 0.95,
  format: 'image/webp',
  maxWidth: 1920
};

const loadSettings = (): CompressionSettings => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn('Failed to load settings from localStorage:', e);
  }
  return DEFAULT_SETTINGS;
};

const saveSettings = (settings: CompressionSettings) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.warn('Failed to save settings to localStorage:', e);
  }
};

function AppContent() {
  const { t } = useLanguage();
  const [images, setImages] = useState<ProcessedImage[]>([]);
  const [previewImage, setPreviewImage] = useState<ProcessedImage | null>(null);
  const [settings, setSettings] = useState<CompressionSettings>(loadSettings);
  const [isProcessingGlobal, setIsProcessingGlobal] = useState(false);

  const handleSettingsChange = (newSettings: CompressionSettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  // Debounced processing trigger when settings change
  useEffect(() => {
    if (images.length === 0) return;

    const timer = setTimeout(() => {
      processAllImages(images, settings);
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settings]);

  const processAllImages = async (currentImages: ProcessedImage[], currentSettings: CompressionSettings) => {
    setIsProcessingGlobal(true);
    setImages(prev => prev.map(img => ({ ...img, status: 'processing' })));

    const processed = await Promise.all(currentImages.map(async (img) => {
      try {
        const compressedBlob = await compressImage(img.originalFile, currentSettings);
        const originalSize = img.originalFile.size;
        const compressedSize = compressedBlob.size;
        const ratio = Math.round(((originalSize - compressedSize) / originalSize) * 100);

        if (img.compressedUrl) URL.revokeObjectURL(img.compressedUrl);
        const newUrl = URL.createObjectURL(compressedBlob);

        return {
          ...img,
          compressedBlob,
          compressedUrl: newUrl,
          status: 'done' as const,
          compressionRatio: ratio > 0 ? ratio : 0
        };
      } catch (error) {
        return { ...img, status: 'error' as const };
      }
    }));

    setImages(processed);
    setIsProcessingGlobal(false);
  };

  const handleFilesSelected = (files: File[]) => {
    const newImages: ProcessedImage[] = files.map(file => ({
      id: generateId(),
      originalFile: file,
      originalPreviewUrl: URL.createObjectURL(file),
      compressedBlob: null,
      compressedUrl: null,
      status: 'pending',
      compressionRatio: 0
    }));

    setImages(prev => {
        const updated = [...prev, ...newImages];
        processPendingImages(updated, settings);
        return updated;
    });
  };

  const processPendingImages = async (allImages: ProcessedImage[], currentSettings: CompressionSettings) => {
     setIsProcessingGlobal(true);
     const updatedImages = [...allImages];

     for (let i = 0; i < updatedImages.length; i++) {
         if (updatedImages[i].status === 'pending') {
             updatedImages[i].status = 'processing';
             setImages([...updatedImages]); 
             
             try {
                const compressedBlob = await compressImage(updatedImages[i].originalFile, currentSettings);
                const originalSize = updatedImages[i].originalFile.size;
                const compressedSize = compressedBlob.size;
                const ratio = Math.round(((originalSize - compressedSize) / originalSize) * 100);
                
                updatedImages[i].compressedBlob = compressedBlob;
                updatedImages[i].compressedUrl = URL.createObjectURL(compressedBlob);
                updatedImages[i].status = 'done';
                updatedImages[i].compressionRatio = ratio > 0 ? ratio : 0;
             } catch (e) {
                 updatedImages[i].status = 'error';
             }
             setImages([...updatedImages]);
         }
     }
     setIsProcessingGlobal(false);
  };

  const handleRemoveImage = (id: string) => {
    setImages(prev => {
        const target = prev.find(img => img.id === id);
        if (target) {
            URL.revokeObjectURL(target.originalPreviewUrl);
            if (target.compressedUrl) URL.revokeObjectURL(target.compressedUrl);
        }
        return prev.filter(img => img.id !== id);
    });
  };

  const handleClearAll = () => {
      images.forEach(img => {
          URL.revokeObjectURL(img.originalPreviewUrl);
          if (img.compressedUrl) URL.revokeObjectURL(img.compressedUrl);
      });
      setImages([]);
  };

  const handleDownloadAll = () => {
      images.forEach(img => {
          if (img.status === 'done' && img.compressedUrl) {
              const link = document.createElement('a');
              link.href = img.compressedUrl;
              const extension = img.compressedBlob?.type.split('/')[1] || 'jpg';
              const originalName = img.originalFile.name.substring(0, img.originalFile.name.lastIndexOf('.'));
              link.download = `${originalName}_compressed.${extension}`;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
          }
      });
  };

  return (
    <div className="min-h-screen pb-20">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <section className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
                <h2 className="text-3xl font-bold text-gray-900">{t('heroTitle')}</h2>
                <p className="text-gray-500 whitespace-pre-line">{t('heroSubtitle')}</p>
            </div>
            
            <Dropzone onFilesSelected={handleFilesSelected} />
        </section>

        {images.length > 0 && (
          <div className="animate-fade-in space-y-8">
            <div className="max-w-4xl mx-auto">
                <SettingsPanel
                    settings={settings}
                    onSettingsChange={handleSettingsChange}
                    disabled={isProcessingGlobal}
                />
            </div>

            <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                    {t('queueTitle')} ({images.length})
                </h3>
                <div className="flex gap-3">
                    <button 
                        onClick={handleClearAll}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                        <DeleteIcon className="w-4 h-4" />
                        {t('clearAll')}
                    </button>
                    <button 
                        onClick={handleDownloadAll}
                        disabled={isProcessingGlobal}
                        className="flex items-center gap-2 px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isProcessingGlobal ? (
                            <LoadingIcon className="w-4 h-4 animate-spin" />
                        ) : (
                            <DownloadIcon className="w-4 h-4" />
                        )}
                        {t('downloadAll')}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map(image => (
                    <ImageCard 
                        key={image.id} 
                        image={image} 
                        onRemove={handleRemoveImage}
                        onPreview={setPreviewImage}
                    />
                ))}
            </div>
          </div>
        )}
      </main>

      {previewImage && (
        <PreviewModal 
          originalUrl={previewImage.originalPreviewUrl}
          compressedUrl={previewImage.compressedUrl}
          title={previewImage.originalFile.name}
          onClose={() => setPreviewImage(null)}
        />
      )}
    </div>
  );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;

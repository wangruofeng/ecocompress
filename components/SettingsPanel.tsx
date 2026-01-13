import React from 'react';
import { CompressionSettings } from '../types';
import { SettingsIcon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';

interface SettingsPanelProps {
  settings: CompressionSettings;
  onSettingsChange: (newSettings: CompressionSettings) => void;
  disabled: boolean;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({ settings, onSettingsChange, disabled }) => {
  const { t } = useLanguage();
  const [isDragging, setIsDragging] = React.useState(false);
  
  const handleQualityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSettingsChange({
      ...settings,
      quality: parseFloat(e.target.value)
    });
  };

  const handleMouseDown = () => {
    if (!disabled) setIsDragging(true);
  };

  React.useEffect(() => {
    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchend', handleEnd);
      return () => {
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, disabled]);

  const getQualityLabel = (q: number) => {
    if (q >= 0.8) return t('qualityHigh');
    if (q >= 0.5) return t('qualityMed');
    return t('qualityLow');
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
        <SettingsIcon className="w-5 h-5 text-emerald-600" />
        <h2 className="font-semibold text-gray-900">{t('settingsTitle')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quality Slider */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-sm font-medium text-gray-700">{t('qualityLabel')}</label>
            <span className={`text-xs font-bold px-2 py-1 rounded-full 
              ${settings.quality >= 0.8 ? 'bg-green-100 text-green-700' : 
                settings.quality >= 0.5 ? 'bg-yellow-100 text-yellow-700' : 
                'bg-red-100 text-red-700'}`}>
              {Math.round(settings.quality * 100)}% ({getQualityLabel(settings.quality)})
            </span>
          </div>
          
          {/* Custom Progress Bar Slider */}
          <div className="relative group">
            {/* Progress Bar Background */}
            <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              {/* Highlighted Selected Portion */}
              <div 
                className="h-full rounded-full transition-all duration-200 ease-out"
                style={{
                  width: `${((settings.quality - 0.1) / (1.0 - 0.1)) * 100}%`,
                  background: settings.quality >= 0.8 
                    ? 'linear-gradient(90deg, #10b981 0%, #34d399 100%)'
                    : settings.quality >= 0.5
                    ? 'linear-gradient(90deg, #f59e0b 0%, #fbbf24 100%)'
                    : 'linear-gradient(90deg, #ef4444 0%, #f87171 100%)',
                  boxShadow: isDragging ? '0 0 8px rgba(0,0,0,0.2)' : 'none'
                }}
              />
            </div>
            
            {/* Slider Input (invisible but functional) */}
            <input
              type="range"
              min="0.1"
              max="1.0"
              step="0.05"
              value={settings.quality}
              onChange={handleQualityChange}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
              disabled={disabled}
              className="absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer disabled:cursor-not-allowed z-10"
              style={{
                background: 'transparent',
                WebkitAppearance: 'none',
                appearance: 'none'
              }}
            />
            
            {/* Slider Thumb Indicator */}
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 bg-white border-2 rounded-full shadow-lg transition-all duration-200 ease-out pointer-events-none ${
                isDragging ? 'w-6 h-6 scale-110' : 'w-5 h-5 group-hover:w-6 group-hover:h-6'
              }`}
              style={{
                left: `calc(${((settings.quality - 0.1) / (1.0 - 0.1)) * 100}% - ${isDragging ? '12px' : '10px'})`,
                borderColor: settings.quality >= 0.8 
                  ? '#10b981'
                  : settings.quality >= 0.5
                  ? '#f59e0b'
                  : '#ef4444',
                borderWidth: isDragging ? '3px' : '2px'
              }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-gray-400 px-1">
            <span>{t('lowSize')}</span>
            <span>{t('bestQuality')}</span>
          </div>
        </div>

        {/* Format Selection */}
        <div className="space-y-4">
          <label className="text-sm font-medium text-gray-700 block">{t('outputFormat')}</label>
          <div className="grid grid-cols-3 gap-3">
             <button
                onClick={() => onSettingsChange({...settings, format: 'image/jpeg'})}
                className={`py-2 px-3 text-sm rounded-lg border transition-all ${settings.format === 'image/jpeg' ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-medium ring-1 ring-emerald-500' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
             >
               JPG
             </button>
             <button
                onClick={() => onSettingsChange({...settings, format: 'image/png'})}
                className={`py-2 px-3 text-sm rounded-lg border transition-all ${settings.format === 'image/png' ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-medium ring-1 ring-emerald-500' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
             >
               PNG
             </button>
             <button
                onClick={() => onSettingsChange({...settings, format: 'image/webp'})}
                className={`py-2 px-3 text-sm rounded-lg border transition-all ${settings.format === 'image/webp' ? 'border-emerald-500 bg-emerald-50 text-emerald-700 font-medium ring-1 ring-emerald-500' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
             >
               WebP
             </button>
          </div>
          <p className="text-xs text-gray-500">
            {settings.format === 'image/webp' ? t('formatWebpDesc') : 
             settings.format === 'image/jpeg' ? t('formatJpegDesc') : t('formatPngDesc')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;

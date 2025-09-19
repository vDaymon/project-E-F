const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/imgs';
const outputDir = './public/imgs/optimized';

// Crear directorio de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Función para optimizar una imagen
async function optimizeImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .resize(800, 600, { 
        fit: 'inside',
        withoutEnlargement: true 
      })
      .webp({ 
        quality: 80,
        effort: 6 
      })
      .toFile(outputPath);
    
    console.log(`✅ Optimizada: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizando ${inputPath}:`, error.message);
  }
}

// Función para procesar todas las imágenes
async function processImages() {
  const files = fs.readdirSync(inputDir, { recursive: true });
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && 
    !file.includes('optimized')
  );

  console.log(`📸 Encontradas ${imageFiles.length} imágenes para optimizar...`);

  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const relativePath = path.dirname(file);
    const fileName = path.basename(file, path.extname(file));
    const outputDirPath = path.join(outputDir, relativePath);
    
    // Crear subdirectorios si no existen
    if (!fs.existsSync(outputDirPath)) {
      fs.mkdirSync(outputDirPath, { recursive: true });
    }
    
    const outputPath = path.join(outputDirPath, `${fileName}.webp`);
    await optimizeImage(inputPath, outputPath);
  }

  console.log('🎉 ¡Optimización completada!');
  console.log(`📁 Imágenes optimizadas guardadas en: ${outputDir}`);
}

// Ejecutar optimización
processImages().catch(console.error);

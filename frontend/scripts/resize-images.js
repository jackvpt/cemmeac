import sharp from "sharp"
import fs from "fs"
import path from "path"

// INPUT DIRECTORY
const inputDir = "./images-src/"

// OUTPUT DIRECTORY
const outputDir = "./public/images/"

// SIZES TO GENERATE
const sizes = [480, 768, 1280, 1920]

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

fs.readdirSync(inputDir).forEach(async (file) => {
  const inputPath = path.join(inputDir, file)
  const baseName = path.parse(file).name

  for (const width of sizes) {
    await sharp(inputPath)
      .resize({
        width,
        withoutEnlargement: true,
      })
      .webp({
        quality: 80,
        effort: 4,
      })
      .toFile(`${outputDir}/${baseName}_${width}.webp`)
  }
})

console.log("✅ Images generated successfully.")

const fs = require('fs');
const path = require('path');

// Create a folder
const folderName = 'myFolder';
const fileName = 'myFile.txt';
const filePath = path.join(folderName, fileName);

// Función para crear la carpeta y el archivo
function createFolderAndFile() {
  try {
    fs.mkdirSync(folderName);
    console.log(`Carpeta ${folderName} creada con éxito`);
    fs.writeFileSync(filePath, 'Hello, World!');
    console.log(`Archivo ${fileName} creado con éxito en la carpeta ${folderName}`);
  } catch (error) {
    console.error(`Error al crear la carpeta o el archivo: ${error}`);
  }
}

// Función para eliminar el archivo y la carpeta
function deleteFileAndFolder() {
  try {
    fs.unlinkSync(filePath);
    console.log(`Archivo ${fileName} eliminado con éxito`);
    fs.rmdirSync(folderName);
    console.log(`Carpeta ${folderName} eliminada con éxito`);
  } catch (error) {
    console.error(`Error al eliminar el archivo o la carpeta: ${error}`);
  }
}

// Llamar a las funciones
createFolderAndFile();
setTimeout(deleteFileAndFolder, 2000);




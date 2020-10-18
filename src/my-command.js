import sketch from 'sketch'
const Swatch = sketch.Swatch
const doc = sketch.getSelectedDocument()
const Library = sketch.Library
// documentation: https://developer.sketchapp.com/reference/api/

export default function() {
  //sketch.UI.message("测试4 🙌")

  const swatch = Swatch.from({
    name: 'Rainbow',
    color: '#333333',
  })
  doc.swatches.push(swatch)



var libraries = Library.getLibraries()

//const librarySwatches = libraries[1].getImportableSwatchReferencesForDocument(doc)
//const librarySwatches2 = libraries[0].getImportableSwatchReferencesForDocument(doc)

//const singleSwatch = librarySwatches[1].import()

const libnum = libraries.length

for(var i = 0; i < libnum; i++ ){
  console.log(libraries[i].id)
  console.log(libraries[i].name)
}

//sketch.UI.message(libraries[0].id)

  const allLayers = sketch.find('*') // TODO: optimise this query: ShapePath, SymbolMaster, Text, SymbolInstance
  allLayers.forEach(layer => {
    layer.style.fills
      .concat(layer.style.borders)
      .filter(item => item.fillType == 'Color')
      .forEach(item => {

        /*
        for (var i = 0; i < 3; i++){
          const comswatch = librarySwatches[i].import()
          if (item.color === comswatch.color){
            item.color = librarySwatches2[i].import().referencingColor
          }
        }

        sketch.UI.message(librarySwatches.length)
        console.log(item.color)
        console.log(item.name)
        console.log(singleSwatch.color)
        */


      })
    // Previous actions don't work for Text Layer colors that are colored using TextColor, so let's fix that:
  })
}


export function goDark () {


  const darklib = importColorV ().dark
  const lightlib = importColorV ().light

  const darkSwatches = darklib.getImportableSwatchReferencesForDocument(doc)
  const lightSwatches = lightlib.getImportableSwatchReferencesForDocument(doc)

  console.log(darkSwatches.length)
  console.log(lightSwatches.length)

  //生成对比数据
  var colorcompare = new Array()
  for (var i = 0; i < 112; i++){
    colorcompare[i] = lightSwatches[i].import().color
    }



  const allLayers = sketch.find('*') // 开始遍历
  allLayers.forEach(layer => {
    layer.style.fills
      .concat(layer.style.borders)
      .filter(item => item.fillType == 'Color')
      .forEach(item => {

        
        for (var i = 0; i < 112; i++){
          //const comswatch = lightSwatches[i].import()
          if (item.color === colorcompare[i]){
            item.color = darkSwatches[i].import().referencingColor
          }
        }

      })

      if (layer.style.textColor) {
        
        const layerColor = layer.style.textColor
        
        for (var i = 0; i < 112; i++){
          //const comswatch = lightSwatches[i].import()
          if (layerColor === colorcompare[i]){
            layer.style.textColor = darkSwatches[i].import().referencingColor
          }
        }
      }



    })
      
}




export function goLight () {


  const darklib = importColorV ().dark
  const lightlib = importColorV ().light

  const darkSwatches = darklib.getImportableSwatchReferencesForDocument(doc)
  const lightSwatches = lightlib.getImportableSwatchReferencesForDocument(doc)
  

  console.log(darkSwatches.length)
  console.log(lightSwatches.length)

    //生成对比数据
    var colorcompare = new Array()
    for (var i = 0; i < 112; i++){
      colorcompare[i] = darkSwatches[i].import().color
      }


  const allLayers = sketch.find('*') // 开始遍历
  allLayers.forEach(layer => {
    layer.style.fills
      .concat(layer.style.borders)
      .filter(item => item.fillType == 'Color')
      .forEach(item => {

        
        for (var i = 0; i < 112; i++){
          //const comswatch = darkSwatches[i].import()
          if (item.color === colorcompare[i]){
            item.color = lightSwatches[i].import().referencingColor
          }
        }

      })

      if (layer.style.textColor) {
        
        const layerColor = layer.style.textColor
        
        for (var i = 0; i < 112; i++){
          //const comswatch = darkSwatches[i].import()
          if (layerColor === colorcompare[i]){
            layer.style.textColor = lightSwatches[i].import().referencingColor
          }
        }
      }



    })
      
}







export function importColorV () {

  sketch.UI.message("开心 🙌") //确认活着

  const lib = Library.getLibraries()//引入全部Library
  const libnum = lib.length//library 数量

//找到并存储两个library

  for (var i = 0; i<libnum ; i++){


    if (lib[i].id === "4a8fa07e-0b06-488d-9910-5ed49dc7f450"){
      var darklib = lib[i]
    }

    if (lib[i].id === "1dacf461-18c4-4132-893a-776d8b18894e"){
      var lightlib = lib[i]
    }

  }
  
  return {dark:darklib,light:lightlib}
  
}
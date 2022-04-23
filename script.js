function hammenuClose(){
    const hammenu = document.getElementById('hamMenu')
    const features = document.getElementById('featuresExpanded')
    const company = document.getElementById('companyExpanded')
    hammenu.style.display = 'none'
    featuresArr = Array.from(features.classList)
    if(featuresArr.indexOf('show') != -1){
        expandFeatures()
    }
    companyArr = Array.from(company.classList)
    if (companyArr.indexOf('show') != -1){
        expandCompany()
    }
}
function hammenuOpen(){
    const hammenu = document.getElementById('hamMenu')
    hammenu.style.display = 'block'
}
function expandFeatures(){
    const features = document.getElementById('featuresExpanded')
    const arrowDown = document.getElementById('arrowDown1')
    const arrowUp = document.getElementById('arrowUp1')
    features.classList.toggle('show')
    arrowDown.classList.toggle('show')
    arrowUp.classList.toggle('hide')
}
function expandCompany(){
    const company = document.getElementById('companyExpanded')
    const arrowDown = document.getElementById('arrowDown2')
    const arrowUp = document.getElementById('arrowUp2')
    company.classList.toggle('show')
    arrowDown.classList.toggle('show')
    arrowUp.classList.toggle('hide')
}

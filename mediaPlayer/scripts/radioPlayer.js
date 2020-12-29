export const radioPlayerInit = () => {
    console.log('"Radio Player" инициализирован');

    const radioItem = document.querySelectorAll('.radio-item');
    const radioBtn = document.querySelectorAll('.radio-btn');

    const tooglePLay = () => {
        if (radioBtn.paused) {
            radioBtn.play();
        }
    }
    
    // radioBtn.addEventListener('click', () => {
    //     tooglePLay();
    // });

    radioBtn.forEach(item => {
        switch(item.id) {
            case 'RTLGroove':
                radioBtn.addEventListener('click', () => {
                    tooglePLay();
                });
                console.log('---//---');
                console.log('RTLGroove is on');
                break;
            
            case 'energy':
                console.log('Energy is on');
                break;
            
            case 'recordRus':
                console.log('Record is on');
                break;
            
            case 'slowRadio':
                console.log('Slow Radio is on');
                break;
            
            case 'roadRadio':
                console.log('Road Radio is on');
                break;
            
            case '90years':
                console.log('90years Radio is on');
                break;
            
            default:
                console.log('Sorry, I don\'t found any radio');
        }
    });

};
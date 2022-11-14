document.querySelector('#submit').addEventListener('click',loader)

document.querySelector('#clear').addEventListener('click',clear)


function fcal(){
    const m = document.getElementById('mass').value
    const a = document.getElementById('angle').value
    const u = document.getElementById('uk').value
    
    let f = (m*9.81*((Math.sin(a*Math.PI/180))+(u*Math.cos(a*Math.PI/180)))).toFixed(2)
    //console.log('res'+f)

 
    
    if(m>0 && a>0 && u >=0 && u !=''){
        document.getElementById('res').innerHTML = 'แรงดึง = '+f+' N'
        
        document.getElementById('res').style.display = 'block'
        document.querySelector('.loader').style.display = 'none'
    }
    else{
        document.getElementById('res').style.display = 'block'
        document.querySelector('.loader').style.display = 'none'
        
        alert('กรุณากรอกข้อมูลให้ถูกต้อง')
    }
}

function clear(){
    document.getElementById('mass').value=''
    document.getElementById('angle').value=''
    document.getElementById('uk').value=''
}

function loader(){
    document.getElementById('res').style.display='none'
    document.querySelector('.loader').style.display='block'
    setTimeout(fcal,800)
}
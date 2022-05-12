let adrese = window.location.hash
adrese = decodeURI(adrese)
adrese=adrese.replace('#','')
adrese =adrese.split(",")
let vards =adrese[0]
document.querySelector('.virsraksts').innerHTML='Sveiks  '+vards


let laukumsSaturs = ['✨','🎄','☘️','☘️','🎄','✨']
let atvertieLaukumi = []
let pedejieDivi = []

function veiktGajienu(laukums)
{
  let atvertsJaunsLaukums = false;
  console.log(laukums)
  if(atvertieLaukumi.lastIndexOf(laukums) == -1)
  {
      atvertsJaunsLaukums=true
  }
  else
  {
      atvertsJaunsLaukums = false
  }
  
  if(atvertsJaunsLaukums)
  {
  document.querySelector('#'+laukums+' div').style.display="block"
      atvertieLaukumi.push(laukums)
  }
  if(pedejieDivi.length == 2)
  {
    let atverts1 = pedejieDivi[0].replase ('L','')
    let atverts2 =pedejieDivi[1].replase ('L','')
    atverts1 = parseInt(atverts1,10)
    atverts2 = parseInt(atverts2,10)
    if(laukumsSaturs[atverts1] == laukumsSaturs[atverts2])
    {
      console.log('atvērti vienādi')
      atvertieLaukumi.push(pedejieDivi[0],pedejieDivi[1])
    }
    else
    {
        console.log('nav atvērti vienādi')
        document.querySelector('#'+pedejieDivi[0]+' div').style.opacity=0.1
        document.querySelector('#'+pedejieDivi[1]+' div').style.opacity=0.1
        
        let pedejieDiviCopy = pedejieDivi

        setTimeout( function()
        {  
            document.querySelector('#'+pedejieDiviCopy[0]+' div').style.display ='none'
            document.querySelector('#'+pedejieDiviCopy[1]+' div').style.opacity='none'


         }    ,500  )
    }
   pedejieDivi = []

  }
  
  if(laukumsSaturs.length == atvertieLaukumi.length)
  {
      alert('Apsveicam!')
  }
}
function judgeVegetable(vegetables, metric){ 
    if ( metric === 'plumpness')
    { if ( vegetables[0].plumpness > vegetables[1].plumpness && vegetables[0].plumpness > vegetables[2].plumpness ){ 
    vegetables.submitter = vegetables[0].submitter;
    } else if ( vegetables[1].plumpness > vegetables[0].plumpness && vegetables[1].plumpness > vegetables[2].plumpness ){ 
      vegetables.submitter = vegetables[1].submitter;
    } else if ( vegetables[2].plumpness > vegetables[1].plumpness && vegetables[2].plumpness > vegetables[0].plumpness ){ 
      vegetables.submitter = vegetables[2].submitter;
    } return vegetables.submitter
  } else if ( metric === 'redness')
    { if ( vegetables[0].redness > vegetables[1].redness && vegetables[0].redness > vegetables[2].redness ){ 
      vegetables.submitter = vegetables[0].submitter;
    } else if ( vegetables[1].redness > vegetables[0].redness && vegetables[1].redness > vegetables[2].redness ){ 
      vegetables.submitter = vegetables[1].submitter;
    } else if ( vegetables[2].redness > vegetables[1].redness && vegetables[2].redness > vegetables[0].redness ){ 
      vegetables.submitter = vegetables[2].submitter;
    } return vegetables.submitter
  }
}     
console.log(judgeVegetable([
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
], 'redness'))
    

    
    /*
    if (metric === veg[veg.length - 1]){
      return veg.length - 1 
    } else if (metric != veg[veg.length - 1]){
      veg.pop() 
      return(veg)
    } 
  } 
}
*/
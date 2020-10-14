function isTouching(m,f){
    if(m.x-f.x < m.width /2+ f.width/2
      && f.x-m.x < m.width /2+ f.width/2
      && m.y-f.y < m.width /2+ f.width/2
      && f.y-m.y < m.width /2+ f.width/2)
    {
    return true 
    }
    else{
      return false
    }
  }
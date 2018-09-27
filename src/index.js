module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 != 0)
  {
    return false;
  }

  let mass = [], i = 0, j = 0;

  for(i = 0; i < str.length; i++)
  {
      for (j = 0; j < bracketsConfig.length; j++) 
      {
          if(str[i] == bracketsConfig[j][0]  && 
            bracketsConfig[j][0] == bracketsConfig[j][1] &&
             bracketsConfig[j][0] == mass[mass.length - 1])
             {
              mass.pop();
              break;
            }
  
          if (str[i] == bracketsConfig[j][0])
          {
  
              mass.push(str[i]);
              break;
          }
          if(str[i] == bracketsConfig[j][1])
          {
                  if(bracketsConfig[j][0] != mass.pop()){
  
                      return false;
                  }
          }
      }
  }
  
  if(mass.pop()) 
  { 
    return false; 
  }
  return true;
}
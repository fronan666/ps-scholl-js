const obj = {
    search: "Вася",
    take: 10
  };
  
  const url = new URLSearchParams(obj);
  console.log(url.toString());
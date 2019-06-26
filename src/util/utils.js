export const groupByYear = (data) => {
  // let datas = {
  //   '2019':[],
  //   '2018': [],
    
  // }
  const ans = data.reduce((acc,el) => {
    // console.log(acc);
    let year = el.node.frontmatter.year
    if(acc[year]){
      acc[year].push({
        date: el.node.frontmatter.date,
        title: el.node.frontmatter.title,
        path: el.node.frontmatter.path
      });
    }else{
      acc[year] = [];
      acc[year].push({
        date: el.node.frontmatter.date,
        title: el.node.frontmatter.title,
        path: el.node.frontmatter.path
      });
    }
    return acc;
  },{});
  return ans;
}


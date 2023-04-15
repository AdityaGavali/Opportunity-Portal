import React from "react";

const About = () => {
  return (
    <div>       
    <div className="images-leaning">
    <div>
      <img style={{height:'180px'}} src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Eleanor from The Good Place" />
    </div>
    <div>
      <img style={{height:'180px'}} src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fEVOR0lORUVSSU5HJTIwRVhBTXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" alt="Chidi from The Good Place" />
    </div>
    <div>
      <img style={{height:'180px'}} src="https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRldmVsb3BtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Jason from The Good Place" />
    </div>
    <div>
      <img style={{height:'180px'}} src="https://images.unsplash.com/photo-1550041473-d296a3a8a18a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGVuZ2luZWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Tahani from The Good Place" />
    </div>
    
  </div>
  <div style={{marginRight:'3px'}}>
  <div className="higher-oppor" style={{boxSizing: 'border-box',
    width: '100%',
    minWidth: '800px', margin:'15px', backgroundColor:'gold'}}>
    <h2>Higher Study Opportunities </h2>
    <div className="div3">
      <a href="https://byjus.com/gate/gate-exam/" target="_blank">GATE</a>
      <a href="https://byjus.com/cat/exam-info/" target="_blank">CAT</a>
      <a href="https://www.mastersportal.com/articles/2926/how-to-study-abroad-in-2023-a-step-by-step-guide.html" target="_blank">MS Abroad</a>
    </div>
  </div>
  <div className="div" style={{boxSizing: 'border-box',
    width: '100%',
    minWidth: '800px',margin:'15px', backgroundColor:'gold'}}>
  

    <h2 style={{marginBottom:'2px'}}>Placement Resources</h2>
    <div className="div2">
    <a href="https://www.udemy.com/" target="_blank" className="resource">Udemy</a>
    <br />
    <a href="https://www.coursera.org/"target="_blank" className="resource">Coursera</a>
    <br />
    <a href="https://www.geeksforgeeks.org/"target="_blank" className="resource">GeeksForGeeks</a>
    <br />
    <a href="https://leetcode.com/"target="_blank" className="resource">Leetcode</a>
    <br />
    <a href="https://www.codechef.com/"target="_blank" className="resource">Codechef</a>
    </div>
    <h3></h3>
    <h3></h3>
  </div>
  <div className="roadmap" style={{boxSizing: 'border-box',
    width: '100%',
    minWidth: '800px' , margin:'15px' , backgroundColor:'gold'}}>
    <h2 style={{marginBottom:"2px"}}>Roadmaps</h2>
    <a target="_blank" href="https://roadmap.sh/">Click here to check guided paths for various tech stacks</a>
  </div>
  </div>
  </div> 
  );
};

export default About;

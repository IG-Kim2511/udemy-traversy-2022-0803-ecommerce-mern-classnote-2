
/* 🦄c7 



*/

import React from 'react'

const Rating = ({value, text}) => {
  return (
    <div>
       <h3 className='components_name'> 🦄c7 Rating</h3>    

       {/*🍀*/}
      <div>
        <p>
          🍀c7. font awesome
          html코드 그대로 복사해온것
          className ={}으로 수정한것 모두 제대로 적용됨
        </p>

          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star-half-stroke"></i>   
          <i className={"fa-solid fa-star"}></i>
      </div>

       <div>value(rating) : {value}</div>
       <div>text: {text}</div>
       
       <p>🍀c7. rating 넣기</p>
       <div className="rating">
        <span>
          <i className={value => 1
              ? "fa-solid fa-star"
              : value => 0.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-solid fa-empty-set'
          }></i>
        </span>

          <span>        
              {
                  value >= 2
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 1.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          <span>       
              {
                  value >= 3
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 2.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          <span>        
              {
                  value >= 4
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 3.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          <span>        
              {
                  value >= 5
                  ? <i class="fa-solid fa-star"></i> 
                  : value >= 4.5
                  ? <i class="fa-solid fa-star-half-stroke"></i> 
                  : <i class="fa-solid fa-empty-set"></i>                
              }            
          </span>

          {/* 🍀c7. 둘다 같은 뜻 */}
          <span>way1: {text ? text : ""}</span>
          <br/>
          <span>way2: {text && text}</span>
       </div>
    
    </div>
  )
}

export default Rating
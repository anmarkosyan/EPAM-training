'use strict';

//======================== 👩🏻‍💻 coding challenge ======================
//select elements
const displayUI = document.querySelector('body');

//variables and user inputs
const data = {};
const userPassword = +prompt('Please, enter your password', '*********');
const userEmail = prompt('Please, enter your email', 'example@gmail.com');

//Functions
function currentStudent(usersData, password, email, payment = true, countOfCourses) {
  let currentUser;
  const currentId = null !== password ? password : usersData.nullContext || {};

  const html = `
    <li class="dropdown">
       <a href="#" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle" data-toggle="dropdown">
          <i class="user-avatar fa fa-user bg-primary"></i> <span class="caret"></span>
       </a>
          <ul class="dropdown-menu" role="menu" id="navDropdownMenu">\n\n
             <li>
                ${
                  null !==
                  (currentUser = email.call(currentId, null !== (currentUser = null !== password ? password.user : password) ? currentUser.href : currentUser, {
                    name: 'unless',
                    hash: {},
                    fn: usersData.program(21, countOfCourses, 0),
                    inverse: usersData.noop,
                    data: countOfCourses,
                  }))
                    ? currentUser
                    : ''
                } 
                
                 \x3c!-- dropdown-no-link--\x3e
               ${
                 null !==
                 (currentUser = email['if'].call(
                   currentId,
                   null !== (currentUser = null !== password ? password.user : password) ? currentUser.href : currentUser,
                   {
                     name: 'if',
                     hash: {},
                     fn: usersData.program(23, countOfCourses, 0),
                     inverse: usersData.noop,
                     data: countOfCourses,
                   }
                 ))
                   ? currentUser
                   : ''
               }
    
               ${
                 null !==
                 (currentUser = email['if'].call(
                   currentId,
                   null !== (currentUser = null !== password ? password.user : password) ? currentUser.label : currentUser,
                   {
                     name: 'if',
                     hash: {},
                     fn: usersData.program(25, countOfCourses, 0),
                     inverse: usersData.noop,
                     data: countOfCourses,
                   }
                 ))
                   ? currentUser
                   : ''
               } 
               
                   <strong id="user_name">
                      ${usersData.escapeExpression(
                        usersData.lambda(null !== (currentUser = null !== password ? password.user : password) ? currentUser.username : currentUser, password)
                      )}
                   </strong>
                                    
               ${
                 null !==
                 (currentUser = email['if'].call(
                   currentId,
                   null !== (currentUser = null !== password ? password.user : password) ? currentUser.secondaryLabel : currentUser,
                   {
                     name: 'if',
                     hash: {},
                     fn: usersData.program(27, countOfCourses, 0),
                     inverse: usersData.noop,
                     data: countOfCourses,
                   }
                 ))
                   ? currentUser
                   : ''
               } 
    
              ${
                null !==
                (currentUser = email['if'].call(
                  currentId,
                  null !== (currentUser = null !== password ? password.user : password) ? currentUser.href : currentUser,
                  {
                    name: 'if',
                    hash: {},
                    fn: usersData.program(29, countOfCourses, 0),
                    inverse: usersData.noop,
                    data: countOfCourses,
                  }
                ))
                  ? currentUser
                  : ''
              } 
             </li>\n\n 
    
             <li role="separator" class="divider">
                ${
                  null !==
                  (currentUser = email.call(currentId, null !== password ? password.userBar : password, {
                    name: 'each',
                    hash: {},
                    fn: usersData.program(31, countOfCourses, 0),
                    inverse: usersData.noop,
                    data: countOfCourses,
                  }))
                    ? currentUser
                    : ''
                } 
             </li>   
         </ul>
   </li>
  `;

  return (displayUI.innerHTML = html);
}

//event listeners
document.addEventListener('click', e => {
  e.preventDefault();

  currentStudent(data, userPassword, userEmail, true, 5);
});

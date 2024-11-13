// export function createRepoListItemView(viewProps) {
//     const root = document.createElement('li');
//     root.className = 'list-item whiteframe';
  
//     root.innerHTML = String.raw`
//       <li>
//         <h4>${viewProps.repo.name}</h4>
//         <p>${viewProps.repo.description || 'No description available.'}</p>
//       </li>
//     `;
//     return { root };
//   }

export function createDepartmentItemView (department) {
    // const listContainer = document.createElement('div');
    // listContainer.classList.add('list_container');
    const departmentItem = document.createElement('button');
    departmentItem.classList.add('department_item');
    departmentItem.textContent = department;
    return departmentItem;
}


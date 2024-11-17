export function createDepartmentItemView (department) {
    const departmentItem = document.createElement('button');
    departmentItem.classList.add('department-item');
    departmentItem.textContent = department;
    return departmentItem;
}


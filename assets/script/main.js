import data from '../data/data.json';

function filterByStudentNameAndGroupName(groupName, data) {
  const check = data.some(groupOfData => groupOfData.group === groupName);
  if (check === true) {
    const filteredStudentData = data.filter(student => student.group === groupName);
    const studentNames = filteredStudentData.map(student => student.name);
    const assistantNames = filteredStudentData.find(student => student.type == 'assistant').name;
    
    return{
      group: groupName,
      student: studentNames,
      assistants: assistantNames
    }
  }
  return 'No student or asistant found';
}

function getGroupNames(data) {
  const groups = data.map(student => student.group);
  const uniqueGroups = [...new Set(groups)];
  console.log(uniqueGroups.map(groupName => filterByStudentNameAndGroupName(groupName, data)));
}

getGroupNames(data);




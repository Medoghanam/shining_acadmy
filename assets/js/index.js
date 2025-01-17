const gradeLevelSelect = document.getElementById('gradeLevel');
const subjectsDiv = document.getElementById('subjects');
const secondaryYearSelect = document.getElementById('secondaryYear');

const subjectsData = {
    primary: ['لغة عربية', 'رياضيات', 'علوم', 'اجتماعيات', 'انجليزي'],
    prep: ['لغة عربية', 'رياضيات', 'علوم', 'اجتماعيات', 'انجليزي', 'فرنسية'],
    secondary: {
      first: ['لغة عربية', 'رياضيات', 'علوم متكاملة', 'انجليزي'],
      second: ['لغة عربية', 'رياضيات', 'فيزياء', 'كيمياء', 'أحياء', 'انجليزي'],
      third: ['لغة عربية', 'رياضيات', 'فيزياء', 'كيمياء', 'أحياء', 'انجليزي']
    }
};
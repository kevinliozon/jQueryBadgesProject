$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/kevinliozon.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourses(response.courses.completed);
    }
  });

  var $badges = $('#badges');

  function addCourses(courses){
    //add divs with the class 'course' to div with the id 'badges'
    courses.forEach(function(course){
      var $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);

      //add h3 titles to each of the previous divs generated
      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      //add img to each of the previous div generated
      $('<img />', {
        src: course.badge
      }).appendTo($course);

      //add link to each of the previous div generated
      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See course'
      }).appendTo($course);
    });
  }

});

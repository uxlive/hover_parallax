(function() {
  var indexOf = [].indexOf;

  if (indexOf.call(window, 'ontouchstart') >= 0 === false) {
    $("body").mousemove(function(e) {
      var moveX, moveY;
      moveX = e.pageX * -1 / 1 + 'px';
      moveY = e.pageY * -1 / 1.5 + 'px';
      return $('.outer').css('background-position', 'calc(50% + ' + moveX + ') calc(50% + ' + moveY + ')');
    });
  }

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLElBQUcsYUFBa0IsTUFBbEIsRUFBQSxjQUFBLE1BQUEsS0FBNEIsS0FBL0I7SUFDQyxDQUFBLENBQUUsTUFBRixDQUFTLENBQUMsU0FBVixDQUFvQixRQUFBLENBQUMsQ0FBRCxDQUFBO0FBQ25CLFVBQUEsS0FBQSxFQUFBO01BQUEsS0FBQSxHQUFRLENBQUMsQ0FBQyxLQUFGLEdBQVUsQ0FBQyxDQUFYLEdBQWUsQ0FBZixHQUFtQjtNQUMzQixLQUFBLEdBQVEsQ0FBQyxDQUFDLEtBQUYsR0FBVSxDQUFDLENBQVgsR0FBZSxHQUFmLEdBQXFCO2FBQzdCLENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxHQUFaLENBQWdCLHFCQUFoQixFQUF1QyxhQUFBLEdBQWUsS0FBZixHQUF1QixlQUF2QixHQUF5QyxLQUF6QyxHQUFpRCxHQUF4RjtJQUhtQixDQUFwQixFQUREOztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaWYgJ29udG91Y2hzdGFydCcgaW4gd2luZG93ID09IGZhbHNlXG5cdCQoXCJib2R5XCIpLm1vdXNlbW92ZSAoZSkgLT5cblx0XHRtb3ZlWCA9IGUucGFnZVggKiAtMSAvIDEgKyAncHgnXG5cdFx0bW92ZVkgPSBlLnBhZ2VZICogLTEgLyAxLjUgKyAncHgnXG5cdFx0JCgnLm91dGVyJykuY3NzICdiYWNrZ3JvdW5kLXBvc2l0aW9uJywgJ2NhbGMoNTAlICsgJysgbW92ZVggKyAnKSBjYWxjKDUwJSArICcgKyBtb3ZlWSArICcpJ1xuIl19
//# sourceURL=coffeescript
function getDay() {
    switch (new Date().getDay()) {
      case 0:
        return "./WeekVideos/sunday.webm";
        // eslint-disable-next-line
        break;
      case 1:
        return "./WeekVideos/monday.webm";
        // eslint-disable-next-line
        break;
      case 2:
        return "./WeekVideos/tuesday.webm";
        // eslint-disable-next-line
        break;
      case 3:
        return "./WeekVideos/wednesday.webm";
        // eslint-disable-next-line
        break;
      case 4:
        return "./WeekVideos/thursday.webm";
        // eslint-disable-next-line
        break;
      case 5:
        return "./WeekVideos/friday.webm";
        // eslint-disable-next-line
        break;
      case 6:
        return "./WeekVideos/saturday.webm";
        // eslint-disable-next-line
        break;
      default:
        return "./WeekVideos/sunday.webm";
        // eslint-disable-next-line
        break;
    }
  }
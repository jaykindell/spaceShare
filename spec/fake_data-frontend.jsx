import React from 'react';

class FakeData extends React.component {
  constructor() {
    super();
    this.getUsers = this.getUsers.bind(this);
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.getSpaces = this.getSpaces.bind(this);
  }

  getUsers() {
    this.setState();
    return [
      {
        id: 0,
        about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis leo vel odio vehicula tempor. Nam nec malesuada metus, a venenatis massa. Sed a vestibulum sem. Nunc viverra cursus tincidunt. Suspendisse vel placerat purus. Sed imperdiet tempus nunc ut fringilla. Nulla ut arcu in mi dapibus pulvinar ut ac sem. Donec pretium commodo imperdiet. Phasellus mauris orci, vestibulum iaculis mi sed, eleifend eleifend tellus. Cras id mauris dolor. Donec vitae accumsan arcu. Quisque velit ex, interdum mattis leo id, accumsan rutrum magna. Aenean sed elit nec tellus auctor vulputate. Donec eget odio nec elit porttitor elementum. Morbi eget nulla nibh.',
        image_url: 'https://i.enkirelations.com/yB9m5YmHuCFfh3HCUXWmrv_2ics=/800x0//images/2017/03/de92d8f49965e401490be2593217bd0e.jpg',
        name_first: 'Waylon',
        name_last: 'Dalton',
        phone: '495-974-1123',
        email: 'dubDalton@rocketmail.com',
        fb_id: 'dubDalton',
        fb_link: 'https://www.facebook.com/dubDalton',
        fb_verified: true,
        planet: 'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/061217_LG_jupiter_main_free.jpg',
        birthdate: 'March 05 1991',
        gender: 'male',
        personality: 'extravert',
        sleep: 'Night owl',
      },
      {
        id: 1,
        about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
        image_url: 'https://www.destinsparks.com/wp-content/uploads/2017/03/tips-for-better-selfies.jpg',
        name_first: 'Angela',
        name_last: 'Walker',
        phone: '848-456-8758',
        email: 'angela_walker@hotmail.com',
        fb_id: 'angela_walker',
        fb_link: 'https://www.facebook.com/angela_walker',
        fb_verified: true,
        planet: 'https://solarsystem.nasa.gov/system/feature_items/images/146_venus_carousel_3.jpg',
        birthdate: 'January 15 1990',
        gender: 'female',
        personality: 'intravert',
        sleep: 'Early bird',
      },
      {
        id: 2,
        about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
        image_url: 'https://thenypost.files.wordpress.com/2016/09/160920-casket-selfies-funeral-director-index.jpg?quality=90&strip=all',
        name_first: 'Eddie',
        name_last: 'Randolph',
        phone: '936-888-7654',
        email: 'eddie_randolph@yahoo.com',
        fb_id: 'eddie_randolph',
        fb_link: 'https://www.facebook.com/eddie_randolph',
        fb_verified: true,
        planet: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg',
        birthdate: 'October 21 1981',
        gender: 'male',
        personality: 'intravert',
        sleep: 'Night owl',
      },
      {
        id: 3,
        about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
        image_url: 'https://mymodernmet.com/wp/wp-content/uploads/archive/FoI5AfXAJMAPuXKoAYgN_1082036625.jpeg',
        name_first: 'Scarlett',
        name_last: 'Duran',
        phone: '976-284-7633',
        email: 'scarlett_duran@gmail.com',
        fb_id: 'scarlett_duran',
        fb_link: 'https://www.facebook.com/scarlett_duran',
        fb_verified: true,
        planet: 'http://nineplanets.org/images/pluto.jpg',
        birthdate: 'July 08 1985',
        gender: 'female',
        personality: 'extravert',
        sleep: 'Early bird',
      },
      {
        id: 4,
        about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
        image_url: 'https://bloximages.newyork1.vip.townnews.com/collegian.psu.edu/content/tncms/assets/v3/editorial/b/27/b27e169a-ce3b-11e5-bbfe-33454a8e4fb6/56b84dedbe44b.image.jpg?resize=1200%2C930',
        name_first: 'Ramon',
        name_last: 'Guzman',
        phone: '456-123-3998',
        email: 'ramon_guzman@gmail.com',
        fb_id: 'ramon_guzman',
        fb_link: 'https://www.facebook.com/ramon_guzman',
        fb_verified: true,
        planet: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
        birthdate: 'November 01 1986',
        gender: 'male',
        personality: 'intravert',
        sleep: 'Night owl',
      },
    ];
  }

  getcurrentUser() {
    this.setState();
    return {
      id: 0,
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis leo vel odio vehicula tempor. Nam nec malesuada metus, a venenatis massa. Sed a vestibulum sem. Nunc viverra cursus tincidunt. Suspendisse vel placerat purus. Sed imperdiet tempus nunc ut fringilla. Nulla ut arcu in mi dapibus pulvinar ut ac sem. Donec pretium commodo imperdiet. Phasellus mauris orci, vestibulum iaculis mi sed, eleifend eleifend tellus. Cras id mauris dolor. Donec vitae accumsan arcu. Quisque velit ex, interdum mattis leo id, accumsan rutrum magna. Aenean sed elit nec tellus auctor vulputate. Donec eget odio nec elit porttitor elementum. Morbi eget nulla nibh.',
      image_url: 'https://i.enkirelations.com/yB9m5YmHuCFfh3HCUXWmrv_2ics=/800x0//images/2017/03/de92d8f49965e401490be2593217bd0e.jpg',
      name_first: 'Waylon',
      name_last: 'Dalton',
      phone: '495-974-1123',
      email: 'dubDalton@rocketmail.com',
      fb_id: 'dubDalton',
      fb_link: 'https://www.facebook.com/dubDalton',
      fb_verified: true,
      planet: 'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/061217_LG_jupiter_main_free.jpg',
      birthdate: 'March 05 1991',
      gender: 'male',
      personality: 'extravert',
      sleep: 'Night owl',
    };
  }

  getSpaces() {
    this.setState();
    return [
      {
        name: 'Epsilon Eridani',
        description: 'Nam vel urna vitae felis porttitor gravida in vel turpis. Vivamus dignissim bibendum purus, sed suscipit elit feugiat vel. Morbi fermentum leo risus, id pellentesque mauris malesuada sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat nibh fermentum ornare suscipit. Curabitur vitae nisl urna. Nulla fermentum laoreet iaculis.',
        cost: 300.00,
        capacity: 1,
        amenities: [
          'Quisque vestibulum fringilla efficitur.',
          'Aenean eget neque ante.',
          'Pellentesque pulvinar augue est,',
          'in tempor eros efficitur eu.',
          'Nulla volutpat lacus non quam mollis ultricies.',
          'Nulla vel sollicitudin arcu.',
        ],
        open: true,
        street_address: '123 6th St. Melbourne, FL 32904',
        city: 'Melbourne',
        zip: '32904',
        state: 'FL',
        main_image: 'https://images.businessoffashion.com/site/uploads/2016/07/Barbarian_Group_superdesk_-_Source_Courtesy_1.jpg?auto=format%2Ccompress&crop=top&fit=crop&h=573&w=1024',
        neighborhood: 'Greene Prarie',
        owner: 1,
        purpose: 'Work',
        timeline: 'Long-term',
        pet: 'Anywhere is fine',
        smoking: 'Outside is fine',
        members: [
          {
            id: 1,
            about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
            image_url: 'https://www.destinsparks.com/wp-content/uploads/2017/03/tips-for-better-selfies.jpg',
            name_first: 'Angela',
            name_last: 'Walker',
            phone: '848-456-8758',
            email: 'angela_walker@hotmail.com',
            fb_id: 'angela_walker',
            fb_link: 'https://www.facebook.com/angela_walker',
            fb_verified: true,
            planet: 'https://solarsystem.nasa.gov/system/feature_items/images/146_venus_carousel_3.jpg',
            birthdate: 'January 15 1990',
            gender: 'female',
            personality: 'intravert',
            sleep: 'Early bird',
          },
          {
            id: 2,
            about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
            image_url: 'https://thenypost.files.wordpress.com/2016/09/160920-casket-selfies-funeral-director-index.jpg?quality=90&strip=all',
            name_first: 'Eddie',
            name_last: 'Randolph',
            phone: '936-888-7654',
            email: 'eddie_randolph@yahoo.com',
            fb_id: 'eddie_randolph',
            fb_link: 'https://www.facebook.com/eddie_randolph',
            fb_verified: true,
            planet: 'https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg',
            birthdate: 'October 21 1981',
            gender: 'male',
            personality: 'intravert',
            sleep: 'Night owl',
          },
          {
            id: 3,
            about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
            image_url: 'https://mymodernmet.com/wp/wp-content/uploads/archive/FoI5AfXAJMAPuXKoAYgN_1082036625.jpeg',
            name_first: 'Scarlett',
            name_last: 'Duran',
            phone: '976-284-7633',
            email: 'scarlett_duran@gmail.com',
            fb_id: 'scarlett_duran',
            fb_link: 'https://www.facebook.com/scarlett_duran',
            fb_verified: true,
            planet: 'http://nineplanets.org/images/pluto.jpg',
            birthdate: 'July 08 1985',
            gender: 'female',
            personality: 'extravert',
            sleep: 'Early bird',
          },
        ],
      },
      {
        name: 'my crib',
        description: 'Nam vel urna vitae felis porttitor gravida in vel turpis. Vivamus dignissim bibendum purus, sed suscipit elit feugiat vel. Morbi fermentum leo risus, id pellentesque mauris malesuada sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat nibh fermentum ornare suscipit. Curabitur vitae nisl urna. Nulla fermentum laoreet iaculis.',
        cost: 550.00,
        capacity: 1,
        amenities: [
          'Donec non lacus vestibulum',
          'volutpat leo sed',
          'tristique velit.',
          'Proin congue nibh ut ante vulputate egestas.',
          'Proin eleifend dui sit amet magna placerat pellentesque.',
          'Nam tempus orci non odio consectetur posuere.',
          'In pulvinar nibh lectus.',
          'vulputate erat.',
        ],
        open: true,
        street_address: '456 15th St. Melbourne, FL 32904',
        city: 'Melbourne',
        zip: '32904',
        state: 'FL',
        main_image: 'https://cdn.vox-cdn.com/thumbor/1XgXyrtwx2tg7FK9gVZfomt7B54=/0x600/cdn.vox-cdn.com/uploads/chorus_asset/file/4608573/Screen_20Shot_202015-03-23_20at_201.14.01_20PM.0.png',
        neighborhood: 'Briggen Quarry',
        owner: 0,
        purpose: 'Live',
        timeline: 'Long-term',
        pet: 'Absolutely not',
        smoking: 'Absolutely not',
        members: [
          {
            id: 0,
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris iaculis leo vel odio vehicula tempor. Nam nec malesuada metus, a venenatis massa. Sed a vestibulum sem. Nunc viverra cursus tincidunt. Suspendisse vel placerat purus. Sed imperdiet tempus nunc ut fringilla. Nulla ut arcu in mi dapibus pulvinar ut ac sem. Donec pretium commodo imperdiet. Phasellus mauris orci, vestibulum iaculis mi sed, eleifend eleifend tellus. Cras id mauris dolor. Donec vitae accumsan arcu. Quisque velit ex, interdum mattis leo id, accumsan rutrum magna. Aenean sed elit nec tellus auctor vulputate. Donec eget odio nec elit porttitor elementum. Morbi eget nulla nibh.',
            image_url: 'https://i.enkirelations.com/yB9m5YmHuCFfh3HCUXWmrv_2ics=/800x0//images/2017/03/de92d8f49965e401490be2593217bd0e.jpg',
            name_first: 'Waylon',
            name_last: 'Dalton',
            phone: '495-974-1123',
            email: 'dubDalton@rocketmail.com',
            fb_id: 'dubDalton',
            fb_link: 'https://www.facebook.com/dubDalton',
            fb_verified: true,
            planet: 'https://www.sciencenewsforstudents.org/sites/default/files/scald-image/061217_LG_jupiter_main_free.jpg',
            birthdate: 'March 05 1991',
            gender: 'male',
            personality: 'extravert',
            sleep: 'Night owl',
          },
          {
            id: 4,
            about: 'Etiam convallis, nibh et porttitor venenatis, libero nulla pharetra eros, et euismod dolor justo at nisl. Maecenas eu imperdiet odio. Nulla gravida tellus gravida luctus ornare. Fusce tempor suscipit eros, vitae varius diam ultricies at. Nullam eros turpis, consectetur aliquet urna in, blandit sodales sapien. Sed luctus imperdiet ipsum non sagittis. Aenean tincidunt nibh a magna lobortis, non fermentum justo congue. Nullam facilisis consequat molestie. Quisque et tellus quis arcu viverra accumsan. Mauris ac malesuada lorem, ut scelerisque odio. Nunc eu ornare erat. Etiam accumsan lobortis purus, sit amet tempus nunc venenatis iaculis. Nam porttitor pulvinar vehicula. Nullam leo lectus, placerat eget odio ac, rutrum dapibus quam. In erat erat, suscipit sit amet leo et, dignissim pretium quam.',
            image_url: 'https://bloximages.newyork1.vip.townnews.com/collegian.psu.edu/content/tncms/assets/v3/editorial/b/27/b27e169a-ce3b-11e5-bbfe-33454a8e4fb6/56b84dedbe44b.image.jpg?resize=1200%2C930',
            name_first: 'Ramon',
            name_last: 'Guzman',
            phone: '456-123-3998',
            email: 'ramon_guzman@gmail.com',
            fb_id: 'ramon_guzman',
            fb_link: 'https://www.facebook.com/ramon_guzman',
            fb_verified: true,
            planet: 'https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg',
            birthdate: 'November 01 1986',
            gender: 'male',
            personality: 'intravert',
            sleep: 'Night owl',
          },
        ],
        todos: [
          'put up the blinds',
          'clean carport',
          'get orange juice',
          'get bread',
          'get avocados',
          'get kumquats',
        ],
      },
    ];
  }

  getSearches() {
    this.setState();
    return [
      {
        price_min: 0.00,
        price_max: 500.00,
        location_specificity: 'Living',
        location_search: 'Melbourne, FL',
        zip: '32904',
        city: 'Melbourne',
        state: 'FL',
        include_people: true,
        user_id: 0,
        personality: 'extravert',
        sleep: 'Night Owl',
        timeline: 'Long-term',
        pet: 'Anywhere is fine',
        smoking: 'Outside is fine',
      },
    ];
  }
}

export default FakeData;
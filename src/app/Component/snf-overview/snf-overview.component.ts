import { Component } from '@angular/core';

@Component({
  selector: 'app-snf-overview',
  templateUrl: './snf-overview.component.html',
  styleUrls: ['./snf-overview.component.css']
})
export class SNFOverviewComponent {
  panels = [
    {
      title: 'Birth of a SNF Movement',
      content: 'The generation these days is all techno-savvy and cyber-literate. They are updated and are well informed of all the new gadgets, innovations and about the changes that occur in the IT sector. We can see them put their technical knowledge to use in about every - day to day task. Our generation next is also rather avid and enthusiastic about the use of social media. They are all found using Facebook, Twitter and WhatsApp and a regular basis despite of being aware of the demerits and setbacks of these social networking applications. Many times these sites are a host to numerous controversies like verbal abuse, harsh criticism, the online leak of personal information and data etc. Despite of all these drawbacks our founder Mr. Pramod Gaikwad once came across an article in a newspaper that high lighted the effective use of social media and Networking in the united states presidential relations. If it happened – the former American President Barack Obama had won the elections with the help of social media. It was then that our Mr. founder was stuck with the paradox of the situation. He realized the immense caliber of this mass media which would be effectively used to revolutionizing the society and for its welfare. And thus our mission was born which aimed towards motivating the youth over the social media and to somehow bring them together to contribute a little something to the society we all live in. Now be that celebrating special occasions in orphanages or donating books and food to the needy.',
      isOpen: true 
    },
    {
      title: 'SNF - The uniqueness of the project',
      content: 'What makes our project ‘one of its kind’ is that it knows no boundaries. Many of our volunteers may not know each other personally or have only been in contact online. And yet they unite for this genuine cause only because of social media’s influence. We get a global participation as help pours in from every corner of the world wherever our members might be. The social media has revolutionized the communications and IT sector as it has gathered millions of uses irrespective of the nationality, race, religion, caste and creed. Anything happening in any part of the world can be conveyed to everyone globally through the social media. Say for instance a numerous NRIs offered generous and free handed contributions through us to the victims of the Uttrakhand cloudbursts and flood disasters.',
      isOpen: false
    },
    {
      title: 'Our Strategies and plan of action',
      content: 'Sadly many of the willing donors are clueless about where and how to contribute and as for where to go looking for beneficiaries. There are very few who are aware of the NGOs in their vicinities that work for the underprivileged and the deprived. It is also a common misunderstanding that the help is only financial in nature. And therefore we have adopted the strategy to spread awareness amongst the social networkers about every possible way, of contribution... be it physical efforts, funding or even sharing the information with their fellow networkers. We update our pages regularly, sending an appeal for to the various orphanage, NGOs, old age homes, tribal schools and refugee camps that need help. We have also been encouraging people to celebrate their birthdays and anniversaries in shelter homes and bring in happiness in the lives of those who live in despair. We arrange donations of the essentials – eatables, clothing, medicines, books and also blood – which sets us apart. We appeal to the people to donate for the true cause of social welfare development. When the calamities of Uttarakhand and Malin village in Maharashtra occurred, people from the nearby locations reached these affected places and labored selflessly. And in this way the forum executes its projects with the help of volunteers who willingly step forth for our cause.',
      isOpen: false
    },
    {
      title: 'SNF - The overall impact',
      content: 'We have come a long way since we began which was in the year 2010. The social networking for social cause was born in the month of July in 2010 and our mission was to amass active participation of the youth for social causes through the social media. The initial response was rather dull and slack. However, as our movement spread and people got to know more of it, they stepped forward to help. Our activities reached them through Facebook and g-mail. Thus people began liking our posts and sharing them which made us a hit amongst the social networkers. Our little spark of movement has now gained a great momentum and turned out to be a helpline for the underprivileged. Today, we have thousands of volunteers spread across several cities eager to help. We successfully execute atleast one of our projects every other week in the state of Maharashtra. With our genuine motives and selfless efforts, we have managed to restore people’s faith in social work and donating for a good cause. We boast of hundreds of such tasks that we undertook to perfection. We express our heartfelt happiness and pleasure over our mission that has united common people, youngsters on social media and students from colleges for a greater cause. This by for remains the most satisfactory impact of our work.Social Networking Forum @ 2017 Designed And Developed By          V',
      isOpen: false
    }
  ];

  togglePanel(index: number) {
    this.panels.forEach((panel, i) => {
      panel.isOpen = i === index ? !panel.isOpen : false;
    });
  }
}

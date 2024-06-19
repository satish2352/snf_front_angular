import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  // ----------------------------Home--------------------------------
  // Home carrosal image API 
  private carrosalurl = 'https://snfbackendfinal.sumagodemo.com/carrosal';

  getCarrosalData() {
    return this.http.get(`${this.carrosalurl}/get`)
  }

  // Home Home_2_Cards image API 
  private Home_2_Cardsurl = 'https://snfbackendfinal.sumagodemo.com/home2cards';
  get_Home_2_Cards() {
    return this.http.get(`${this.Home_2_Cardsurl}/get`)
  }


  // Home Home_4_Cards image API 
  private Home_4_Cardsurl = 'https://snfbackendfinal.sumagodemo.com/home4cards';

  add_Home_4_Cards(formdata: any) {
    return this.http.post(`${this.Home_4_Cardsurl}/post`, formdata);
  }

  get_Home_4_Cards() {
    return this.http.get(`${this.Home_4_Cardsurl}/get`)
  }

  update_Home_4_Cards(id: number, formData: any) {
    return this.http.put(`${this.Home_4_Cardsurl}/put/${id}`, formData);
  }

  delete_Home_4_Cards(id: number) {
    return this.http.delete(`${this.Home_4_Cardsurl}/delete/${id}`)

  }

  //Home media 
  private mediaurl ='https://snfbackendfinal.sumagodemo.com/homemedia';


  postHome_Media(formdata: any) {
    return this.http.post(`${this.mediaurl}/post`, formdata);
  }
  getHome_Media() {
    return this.http.get(`${this.mediaurl}/get`)
  }
  updateHome_Media(id: number, formData: FormData) {
    return this.http.put(`${this.mediaurl}/put/${id}`, formData);
  }
  deleteHome_Media(id: number) {
    return this.http.delete(`${this.mediaurl}/delete/${id}`)
  }

  // Home supporter image API 
  private supporterurl = 'https://snfbackendfinal.sumagodemo.com/supporter';

  addSupporter(formdata: any) {
    return this.http.post(`${this.supporterurl}/post`, formdata);
  }
  getSupporters() {
    return this.http.get(`${this.supporterurl}/get`)
  }
  updateSupporter(id: number, formData: FormData) {
    return this.http.put(`${this.supporterurl}/put/${id}`, formData);
  }
  deleteSupporter(id: number) {
    return this.http.delete(`${this.supporterurl}/delete/${id}`)
  }

  // ----------------------------Who we are--------------------------------
  //Who we are -->Important_SNF_Project_para
  private Important_SNF_Project_para = 'https://snfbackendfinal.sumagodemo.com/Important_SNF_Project_para';
  getImportant_SNF_Project_para(): Observable<any> {
    return this.http.get(this.Important_SNF_Project_para + '/get');
  }


  //Who we are --> Team SNF FounderParticipant
  private founderparticipateurl = 'https://snfbackendfinal.sumagodemo.com/founderparticipates';
  getFounderParticipants() {
    return this.http.get(`${this.founderparticipateurl}/get`)
  }


  //Who we are --> Team SNF Mentors
  private Mentorsurl = 'https://snfbackendfinal.sumagodemo.com/mentors';
  getMentors() {
    return this.http.get(`${this.Mentorsurl}/get`)
  }


  // Who we are --> Team SNF NRI Participants
  private NRIParticipantsurl = 'https://snfbackendfinal.sumagodemo.com/NRI_Participants';
  getNRI_Participants() {
    return this.http.get(`${this.NRIParticipantsurl}/get`)
  }


  //Who we are --> Team SNF State Participants
  private StateParticipantsurl = 'https://snfbackendfinal.sumagodemo.com/State_Participants';
  getState_Participants() {
    return this.http.get(`${this.StateParticipantsurl}/get`)
  }


  // ----------------------------Who we do--------------------------------
  //Who we do --> OnGoingProject_Clean_Water_Project
  private OnGoingProject_Clean_Water_Projecturl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Clean_Water_Project';
  getOnGoingProject_Clean_Water_Project() {
    return this.http.get(`${this.OnGoingProject_Clean_Water_Projecturl}/get`)
  }

  //Who we do --> OnGoingProject_Shahid_Jawan_Fund
  private OnGoingProject_Shahid_Jawan_Fundurl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Shahid_Jawan_Fund';
  getOnGoingProject_Shahid_Jawan_Fund() {
    return this.http.get(`${this.OnGoingProject_Shahid_Jawan_Fundurl}/get`)
  }


  //Who we do --> OnGoingProject_Educational_Facilities
  private OnGoingProject_Educational_Facilitiesurl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Educational_Facilities';
  getOnGoingProject_Educational_Facilities() {
    return this.http.get(`${this.OnGoingProject_Educational_Facilitiesurl}/get`)
  }


  //Who we do --> OnGoingProject_Health_MedicalProjects
  private OnGoingProject_Health_MedicalProjectsurl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Health_MedicalProjects';
  getOnGoingProject_Health_MedicalProjects() {
    return this.http.get(`${this.OnGoingProject_Health_MedicalProjectsurl}/get`)
  }

  //Who we do --> OnGoingProject_Environmental_Conservation
  private OnGoingProject_Environmental_Conservationurl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Environmental_Conservation';
  getOnGoingProject_Environmental_Conservation() {
    return this.http.get(`${this.OnGoingProject_Environmental_Conservationurl}/get`)
  }


  //Who we do --> OnGoingProject_Sport_Projects
  private OnGoingProject_Sport_Projectsurl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Sport_Projects';
  getOnGoingProject_Sport_Projects() {
    return this.http.get(`${this.OnGoingProject_Sport_Projectsurl}/get`)
  }


  //Who we do --> OnGoingProject_Birthday_Celebrations
  private OnGoingProject_Birthday_Celebrationsurl = 'https://snfbackendfinal.sumagodemo.com/OnGoingProject_Birthday_Celebrations';
  getOnGoingProject_Birthday_Celebrations() {
    return this.http.get(`${this.OnGoingProject_Birthday_Celebrationsurl}/get`)
  }

  // ----------------------------Media/Awards--------------------------------
  //Media/Awards -->  article_on_snf
  private article_on_snfurl = 'https://snfbackendfinal.sumagodemo.com/article_on_snf';
  getarticle_on_snf() {
    return this.http.get(`${this.article_on_snfurl}/get`)
  }

  //  Media/Awards -->  snf_in_news_papers
  private snf_in_news_papersurl = 'https://snfbackendfinal.sumagodemo.com/snf_in_news_papers';
  getsnf_in_news_papers() {
    return this.http.get(`${this.snf_in_news_papersurl}/get`)
  }

  //  Media/Awards -->  awards_recognation
  private awards_recognationurl = 'https://snfbackendfinal.sumagodemo.com/awards_recognation';
  getawards_recognation() {
    return this.http.get(`${this.awards_recognationurl}/get`)
  }


}

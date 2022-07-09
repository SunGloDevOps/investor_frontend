import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/settings/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  isBVNVerified?: boolean;

  constructor(
    private settingService: SettingService
  ) { }

  ngOnInit(): void {
    this.getBVNStatus();
    this.getEmailStatus();
    this.getPhoneStatus();
  }

  verifyEmail(): void {
    this.settingService.verifyEmail()
  }

  verifyPhone(): void {
    this.settingService.verifyPhone();
  }

  verifyBVN(): void {
    this.settingService.verifyBVN()
  }

  getBVNStatus(): void {
    this.isBVNVerified = this.settingService.getBVNStatus();
  }

  getPhoneStatus(): void {
    this.isPhoneVerified = this.settingService.getPhoneStatus();
  }

  getEmailStatus(): void {
    this.isEmailVerified = this.settingService.getEmailStatus();
  }

}

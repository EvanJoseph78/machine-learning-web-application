import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instructor-info-card',
  standalone: true,
  imports: [],
  templateUrl: './instructor-info-card.component.html',
  styleUrl: './instructor-info-card.component.css',
})
export class InstructorInfoCardComponent {
  @Input()
  imgperfil: string = '';
  @Input()
  nome: string = '';
  @Input()
  formacao1: string = '';
  @Input()
  formacao2: string = '';

  constructor() { }

  // Verifica se a imagem está disponível, caso seja inválida substitui o link
  imageNotFound() {
    this.imgperfil =
      'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png';
  }
}

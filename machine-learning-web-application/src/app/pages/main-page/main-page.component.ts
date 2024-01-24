import { Component } from '@angular/core';
import { InstructorInfoCardComponent } from './instructor-info-card/instructor-info-card.component';
import { Curso } from '../../shared/models/cursoModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [InstructorInfoCardComponent, CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  curso: Curso = {
    id: 1,
    nome: 'Curso Básico de Machine Learning',
    introducao:
      'Uma Introdução sobre os conceitos básicos da área de aprendizado de máquina.',
    descricao:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus viverra vitae congue eu consequat ac felis donec et. Aliquet risus feugiat in ante. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Nunc non blandit massa enim nec dui nunc mattis enim. Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Facilisis magna etiam tempor orci eu lobortis elementum. Sapien et ligula ullamcorper malesuada proin. Ultrices tincidunt arcu non sodales. Cras pulvinar mattis nunc sed blandit. Sed viverra tellus in hac habitasse. Eu nisl nunc mi ipsum. Faucibus et molestie ac feugiat sed lectus. Felis imperdiet proin fermentum leo vel orci. Vestibulum rhoncus est pellentesque elit. In cursus turpis massa tincidunt dui. Tempus quam pellentesque nec nam. Nec feugiat in fermentum posuere urna nec. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique.',
    duracao: 4,
    disciplina: 'Machine Learning',
    nivel: 'Básico',
    certificado: true,
    topicos: ['Python', 'Machine Learning', 'Colab'],
    professores: [
      {
        imgperfil:
          'https://app.fide.com/upload/10071/4efdd2f969559e8b1c92e99f32ded48e.jpg',
        nome: 'Evandro Mariano',
        formacao1: 'Graduado em Matemática',
        formacao2: 'Basharelando em Sistemas de Informação',
      },
      {
        imgperfil: '',
        nome: 'Joseph Evans',
        formacao1: 'Graduado em Matemática',
        formacao2: 'Basharelando em Sistemas de Informação',
      },
      {
        imgperfil: '',
        nome: 'Joseph Evans',
        formacao1: 'Graduado em Matemática',
        formacao2: 'Basharelando em Sistemas de Informação',
      },
      {
        imgperfil: '',
        nome: 'Joseph Evans',
        formacao1: 'Graduado em Matemática',
        formacao2: 'Basharelando em Sistemas de Informação',
      },
      {
        imgperfil: '',
        nome: 'Joseph Evans',
        formacao1: 'Graduado em Matemática',
        formacao2: 'Basharelando em Sistemas de Informação',
      },
    ],
  };

  constructor() { }
}

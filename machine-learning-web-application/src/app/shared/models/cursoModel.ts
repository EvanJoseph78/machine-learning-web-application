export interface Curso {
  id: number;
  nome: string;
  introducao: string;
  descricao: string;
  duracao: number;
  disciplina: string;
  nivel: string;
  certificado: boolean;
  topicos: string[];
  professores: {
    imgperfil: string;
    nome: string;
    formacao1: string;
    formacao2: string;
  }[];
}

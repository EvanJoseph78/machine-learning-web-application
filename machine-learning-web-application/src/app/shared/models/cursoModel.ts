export interface curso {
  id: number;
  nome: string;
  introducao: string;
  descricao: string;
  duracao: string;
  disciplina: string;
  nivel: string;
  certificado: boolean;
  topicos: string[];
  professores: {
    nome: string;
    formacao1: string;
    formacao2: string;
  }[];
}


export class PDFUtils {

    public static fomatarDataBR(data: Date) {

        const dataFormatada = data.toLocaleDateString('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        return dataFormatada
    }

    public static fomatarHoraBR(data: Date | string) {
        let dateObject: Date;

        // Verifica se é uma string e a converte para Date
        if (typeof data === 'string') {
            dateObject = new Date(data);
        } else {
            dateObject = data;
        }

        // Verifica se o objeto Date é válido
        if (isNaN(dateObject.getTime())) {
            return 'Data inválida';
        }

        // Formata a hora no padrão brasileiro
        const horaFormatada = dateObject.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        return horaFormatada;
    }

}
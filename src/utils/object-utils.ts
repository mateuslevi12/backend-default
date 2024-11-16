export class ObjectUtil {
    private constructor() { }

    static buscarValor(item: any, atributo: any = null, retornoDefault = null, captalize = false) {
        if (!item) {
            return captalize ? this.captalize(retornoDefault) : retornoDefault;
        }

        if (!atributo) {
            return captalize ? this.captalize(item) : item;
        }

        if (typeof atributo === 'number' || atributo.indexOf('.') === -1) {
            if (item[atributo] == null || item[atributo] === undefined || item[atributo] == '') {
                return captalize ? this.captalize(retornoDefault) : retornoDefault;
            }

            return captalize ? this.captalize(item[atributo]) : item[atributo];

        } else {
            const fields: string[] = atributo.split('.');
            let value = item;
            for (let i = 0, len = fields.length; i < len; ++i) {
                if (value == null || value == '') {
                    return captalize ? this.captalize(retornoDefault) : retornoDefault;
                }
                value = value[fields[i]];
            }
            const retorno = value ? value : retornoDefault;

            return captalize ? this.captalize(retorno) : retorno;

        }
    }

    private static captalize(string: string) {
        if (!string) return '';
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    public static atribuirValor(item: object, atributo: string, valor: any): void {
        const atributos = atributo.split('.');
        const propriedadeAAtribuir = atributos.pop();
        let itemAtual = item;
        atributos.some((atributo) => {
            itemAtual = itemAtual[atributo];

            return !itemAtual;
        });
        if (itemAtual) {
            itemAtual[propriedadeAAtribuir] = valor;
        }
    }

    public static possuiValor(item: object, atributo: string): boolean {
        const valor = ObjectUtil.buscarValor(item, atributo, null);
        return valor != null;
    }

    public static estaVazio(item: any): boolean {
        if (item == null || item === undefined) return true;
        if (Object.keys(item).length <= 0) return true;

        return false;
    }
}

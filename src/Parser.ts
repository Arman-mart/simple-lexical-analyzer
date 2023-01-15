import Token from "./Token";
import TokenType from "./TokenType";

export default class Parser {
    tokens: Token[];
    pos: number = 0;
    scope: any = {}

    constructor(tokens: Token[]) {
        this.tokens = tokens;
    }

    match(...expected: TokenType[]): Token | null {
        if (this.pos < this.tokens.length) {
            const currentToken = this.tokens[this.pos];
            if(expected.find( type => type.name === currentToken.type.name)){
                this.pos++;
                return currentToken;
            }
        }
        return null
    }
}
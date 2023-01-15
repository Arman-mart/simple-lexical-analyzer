export default class TokenType {
    name: string;
    regex: string;

    constructor(name: string, regex: string) {
        this.name = name;
        this.regex = regex;
    }
}

export const TOKEN_TYPES_LIST = {
    'NUMBER': new TokenType('NUMBER', '[0-9]*'),
    'VARIABLE': new TokenType('VARIABLE', '[A-Za-z]*'),
    'SEMICOLON': new TokenType('SEMICOLON', ';'),
    'SPACE': new TokenType('SPACE', '[ \\n\\t\\r]'),
    'ASSIGN': new TokenType('ASSIGN', 'ASSIGN'),
    'LOG': new TokenType('LOG', 'CONSOLE'),
    'PLUS': new TokenType('PLUS', 'PLUS'),
    'MINUS': new TokenType('MINUS', 'MINUS'),
    'LPAR': new TokenType('LPAR', '\\('),
    'RPAR': new TokenType('RPAR', '\\)'),
}
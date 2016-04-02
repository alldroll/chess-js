export const TeamT = {
    WHITE: 'white',
    BLACK: 'black'
};

export const FigureT = {
    KING: 'King',
    QUEEN: 'Queen',
    ROOK: 'Rook',
    BISHOP: 'Bishop',
    KNIGHT: 'Knight',
    PAWN: 'Pawn'
};

const Symbols = {};
for (let key in FigureT) {
    Symbols[FigureT[key]] = {};
}

Symbols[FigureT.KING][TeamT.WHITE] = '♔';
Symbols[FigureT.QUEEN][TeamT.WHITE] = '♕';
Symbols[FigureT.ROOK][TeamT.WHITE] = '♖';
Symbols[FigureT.BISHOP][TeamT.WHITE] = '♗';
Symbols[FigureT.KNIGHT][TeamT.WHITE] = '♘';
Symbols[FigureT.PAWN][TeamT.WHITE] = '♙';
Symbols[FigureT.KING][TeamT.BLACK] = '♚';
Symbols[FigureT.QUEEN][TeamT.BLACK] = '♛';
Symbols[FigureT.ROOK][TeamT.BLACK] = '♜';
Symbols[FigureT.BISHOP][TeamT.BLACK] = '♝';
Symbols[FigureT.KNIGHT][TeamT.BLACK] = '♞';
Symbols[FigureT.PAWN][TeamT.BLACK] = '♟';

export const getSymbolByFigureTeam = (figure, team) => {
    if (Symbols.hasOwnProperty(figure) && Symbols[figure].hasOwnProperty(team)) {
        return Symbols[figure][team];
    }

    throw new Error('getByFigureTeam invalid params');
};

export const BLACK_PATH_INIT_Y = 1;
export const WHITE_PATH_INIT_Y = 6;

export var gameState = {};
export const stateSubscriber = (actualState) => {
    gameState = actualState;
};



import { TeamT, FigureT } from './base';

const isFirstPawnMove = (pawn) => {
    return pawn.team === TeamT.BLACK ? pawn.y === 1 : pawn.y === 6;
};

const isEnemyOnPosition = (x, y) => {
    /* TODO */
    return false;
};

export const canMovePawn = (pawn, toX, toY) => {
    let dx = pawn.x - toX, dy = pawn.y - toY;
    if (isEnemyOnPosition()) {
        /* TODO */
        return false;
    }

    let dyDiff = 1;
    if (isFirstPawnMove(pawn)) {
        dyDiff = 2;
    }

    if (pawn.team === TeamT.BLACK) {
        /* dy == -1, -2
         * dy == 1, 2
         */
    }

    return dx === 0;
};

export const canMoveFigure = (figure, toX, toY) => {
    switch (figure.type) {
        case FigureT.PAWN: return canMovePawn(figure, toX, toY);
        default: return true;
    }
};

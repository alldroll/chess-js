import { TeamT, FigureT } from './base';

const isFirstPawnMove = (pawn) => {
    return pawn.team === TeamT.BLACK ? pawn.y === 1 : pawn.y === 6;
};

const isEnemyOnPosition = (x, y) => {
    /* TODO */
    return false;
};

export const canMovePawn = (pawn, toX, toY) => {
    const dx = pawn.x - toX, dy = pawn.y - toY;

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

    return dx === 0 && dy === 1;
};

export const canMoveKnight = (knight, toX, toY) => {
    const dx = Math.abs(knight.x - toX);
    const dy = Math.abs(knight.y - toY);
    return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
};

export const canMoveFigure = (figure, toX, toY) => {
    switch (figure.type) {
        case FigureT.PAWN: return canMovePawn(figure, toX, toY);
        case FigureT.KNIGHT: return canMoveKnight(figure, toX, toY);
        default: return true;
    }
};

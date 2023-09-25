import { Request, Response, NextFunction } from "express";
import { ValidationChain, body, validationResult } from "express-validator";

const registration: ValidationChain[] = [
    body('name')
        .not()
        .isEmpty().withMessage('Nama tidak boleh kosong!'),
    body('email')
        .not()
        .isEmpty().withMessage('Email tidak boleh kosong!')
        .bail()
        .isEmail().withMessage('Format Email tidak valid!'),
    body('alamat')
        .not()
        .isEmpty().withMessage('Alamat tidak boleh kosong!'),
]

const category: ValidationChain[] = [
    body('name')
        .not()
        .isEmpty().withMessage('Nama tidak boleh kosong!'),
    body('page')
        .not()
        .isEmpty().withMessage('Page tidak boleh kosong!'),
    body('detail')
        .not()
        .isEmpty().withMessage('Detail tidak boleh kosong!'),
    body('nameCode')
        .not()
        .isEmpty().withMessage('NameCode tidak boleh kosong!'),
]

const candidate: ValidationChain[] = [
    body('city')
        .not()
        .isEmpty().withMessage('Kota tidak boleh kosong!'),
    body('countElecVote')
        .not()
        .isEmpty().withMessage('Default Vote tidak boleh kosong!')
        .isNumeric().withMessage('Default Vote wajib numeric!')
        .bail()
        .custom(value=>{
            return value === 0 && true;
        }).withMessage('Default Vote wajib 0'),
    body('gender')
        .not()
        .isEmpty().withMessage('Jenis Kelamin tidak boleh kosong!'),
    body('name')
        .not()
        .isEmpty().withMessage('Name tidak boleh kosong!'),
    body('noUrut')
        .not()
        .isEmpty().withMessage('Nomor Urut tidak boleh kosong!')
        .isNumeric().withMessage('Nomor Urut wajib numeric!')
        .bail()
        .custom(value=>{
            return value !== 0 && true;
        }).withMessage('Nomor Urut tidak boleh 0'),
    body('photo')
        .not()
        .isEmpty().withMessage('Photo Candidate tidak boleh kosong!'),
    body('province')
        .not()
        .isEmpty().withMessage('Provinsi tidak boleh kosong!'),
    body('dapil')
        .not()
        .isEmpty().withMessage('Daerah Pilihan tidak boleh kosong!'),
    body('logoParties')
        .not()
        .isEmpty().withMessage('Logo Partai tidak boleh kosong!'),
    body('nameParties')
        .not()
        .isEmpty().withMessage('Name Partai tidak boleh kosong!'),
    body('actionPolling')
        .not()
        .isEmpty().withMessage('Action Polling tidak boleh kosong!')
        .isBoolean().withMessage('Action Polling hanya bernilai TRUE atau FALSE!')
        .bail()
        .custom(value=>{
            return value === false && true;
        }).withMessage('Action Polling wajib bernilai false'),
    body('loading')
        .not()
        .isEmpty().withMessage('Loading tidak boleh kosong!')
        .isBoolean().withMessage('Loading hanya bernilai TRUE atau FALSE!')
        .bail()
        .custom(value=>{
            return value === false && true;
        }).withMessage('Loading wajib bernilai false'),
]

const user: ValidationChain[] = [
    body('name')
        .not()
        .isEmpty().withMessage('Nama tidak boleh kosong!'),
    body('email')
        .not()
        .isEmpty().withMessage('Email tidak boleh kosong!')
        .bail()
        .isEmail().withMessage('Format Email tidak valid!'),
    body('alamat')
        .not()
        .isEmpty().withMessage('Alamat tidak boleh kosong!'),
]


function validation(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            "status": "error",
            "message": result.array()[0].msg
        });
    }

    next();
}

export {
    validation,
    registration,
    category,
    candidate,
    user
}
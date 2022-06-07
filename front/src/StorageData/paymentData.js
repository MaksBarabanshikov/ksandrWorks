import walletLogo from "../image/payment/wallet.svg"
import inputLogo from "../image/payment/refund_top.svg"
import outputLogo from "../image/payment/Refund_bottom.svg"
import applePay from "../image/payment/ApplePay.svg"
import googlePay from "../image/payment/GooglePay.svg"
import visa from "../image/payment/visa-logo.svg"
import payPal from "../image/payment/PayPal.svg"
import masterCard from "../image/payment/Mastercard.svg"
import maestro from "../image/payment/Maestro.svg"

const paymentDate = new Date()
const paymentDateDay = paymentDate.getDay()
const paymentDateMouth = paymentDate.getMonth()
const paymentDateTime = paymentDate.getTime()

export const paymentBalanceData = [
    {id: 0, money: 500, type: "balance", text: "Текущий баланс", img: walletLogo },
    {id: 1, money: 7500, type: "deposit", text: "Сумма депозитов", img: inputLogo },
    {id: 2, money: 2500, type: "output", text: "Сумма выводов", img: outputLogo }
]

 export const paymentRefillData = [
    {id: 0, type: "ApplePay", img: applePay },
    {id: 1, type: "GooglePay", img: googlePay },
    {id: 2, type: "Visa", img: visa },
    {id: 3, type: "PayPal", img: payPal },
    {id: 4, type: "MasterCard", img: masterCard },
    {id: 5, type: "Maestro", img: maestro },
]

export const paymentRateData = [
    {id: 0, type: "MAXIMUM", active: true},
    {id: 1, type: "Medium", active: false},
    {id: 2, type: "Standard", active: false},
]

export const paymentHistoryData = [
    {operation: "#12341", date: "June 1, 2020, 08:22 AM", sum: "$783.22", type: "enrolment", status: "waiting", checked: false},
    {operation: "#12342", date: "June 1, 2020, 08:22 AM", sum: "$783.22", type: "withdrawal", status: "completed", checked: false},
    {operation: "#12343", date: "June 1, 2020, 08:22 AM", sum: "$783.22", type: "withdrawal", status: "error", checked: false},
    {operation: "#12344", date: "June 1, 2020, 08:22 AM", sum: "$783.22", type: "enrolment", status: "canceled", checked: false},
    {operation: "#12345", date: "June 1, 2020, 08:22 AM", sum: "$783.22", type: "enrolment", status: "waiting", checked: false}
]
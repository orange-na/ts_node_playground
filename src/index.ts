import * as QRCode from "qrcode";

const generateQRCode = async (
  data: string,
  filename: string
): Promise<void> => {
  try {
    const qrCode = await QRCode.toFile(filename, data);
    console.log(`QR Code generated successfully at: ${filename}`);
  } catch (error) {
    console.error("Error generating QR Code:", error);
  }
};

const dataToEncode = "https://www.example.com";
const outputFileName = "./public/xample-qrcode.png";

generateQRCode(dataToEncode, outputFileName);

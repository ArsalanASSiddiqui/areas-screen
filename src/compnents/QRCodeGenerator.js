import React,{useState,useEffect} from 'react';
import QRCode from 'qrcode.react';
import jsPDF from 'jspdf';
import JSZip from 'jszip'; // Import JSZip
import axios from 'axios';

const QRCodeGenerator = () => {

    // const [employees, setVCardDataArray] = useState([]);



    // useEffect(() => {

    //     // Fetch data from the API

    //     const fetchData = async () => {

    //         try {

    //             const response = await axios.get('http://localhost:3001/employees'); // Fetch data from the API

    //             setVCardDataArray(response.data); // Set data in the state

    //             console.log("response",response)

    //         } catch (error) {

    //             console.error('Error fetching data:', error); // Handle errors

    //         }

    //     };



    //     fetchData(); // Call fetchData on component mount

    // }, []);

////////////////

// For hard cord user data

    const employees = [
        {
            userId: "0001",
            firstName: "Asif",
            lastName: "Khan",
            org: "Salim Habib University",
            title: "Manager DBA",
            phone: "+030024448670",
            email: "asifbinqadir@gmail.com"
        },
        {
            userId: "0002",
            firstName: "John",
            lastName: "Doe",
            org: "Company Name",
            title: "Software Engineer",
            phone: "(123) 456-7890",
            email: "john.doe@example.com"
        },
        // Add more employee objects here
    ];

    const generateVCard = (employee) => {
        return `BEGIN:VCARD
VERSION:3.0
N:${employee.lastName};${employee.firstName};;;
FN:${employee.firstName} ${employee.lastName}
ORG:${employee.org}
TITLE:${employee.title}
TEL;TYPE=CELL:${employee.phone}
EMAIL;TYPE=INTERNET:${employee.email}
END:VCARD`;
    };

    const downloadQRCode = (index) => {
        const canvas = document.getElementById(`qrcode-${index}`);
        const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = `${employees[index].userId}.png`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    const downloadAllQRCodes = () => {
        const zip = new JSZip();
        employees.forEach((employee, index) => {
            const canvas = document.getElementById(`qrcode-${index}`);
            const imgData = canvas.toDataURL("image/png").split(',')[1]; // Get base64 part
            zip.file(`${employee.userId}.png`, imgData, { base64: true }); // Add image to zip
        });

        // Generate the zip file and download it
        zip.generateAsync({ type: "blob" }).then((content) => {
            const zipName = "All_QRCodes.zip";
            const link = document.createElement("a");
            link.href = URL.createObjectURL(content);
            link.download = zipName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    };

    return (
        <div>
            <h1>QR Code Generator</h1>
            {employees.map((employee, index) => {
                const vCardData = generateVCard(employee);
                return (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <QRCode
                            id={`qrcode-${index}`}
                            value={vCardData}
                            size={Math.min(900, 800)} 
                        />
                        <br />
                        <button onClick={() => downloadQRCode(index)}>
                            Download {employee.firstName} {employee.lastName}'s QR Code
                        </button>
                    </div>
                );
            })}
            <br />
            <button onClick={downloadAllQRCodes}>
                Download All QR Codes
            </button>
        </div>
    );
};

export default QRCodeGenerator;

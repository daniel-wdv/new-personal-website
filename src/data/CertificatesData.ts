import vueCertificate from "../assets/vue-certificate.png"
import djangoCertificate from "../assets/django-certificate.png"
import pythonCertificate from "../assets/python-certificate.png"
import reactCertificate from "../assets/react-certificate.png"
interface CertificatesType {
  image: string
  url: string
}

export const CertificatesData: CertificatesType[] = [
  {
    image: reactCertificate,
    url: "https://www.udemy.com/certificate/UC-efdeb251-849d-43fd-bf8e-95200a575f9b/",
  },
  {
    image: pythonCertificate,
    url: "https://www.udemy.com/certificate/UC-4fe01339-72a4-499b-9de0-16df0bccc213/",
  },
  {
    image: djangoCertificate,
    url: "https://www.udemy.com/certificate/UC-886d61c2-c921-41e9-b0b6-30349acbd3ab/",
  },
  {
    image: vueCertificate,
    url: "https://www.udemy.com/certificate/UC-7fd933eb-4f57-45ac-8331-b26ce6fd90a7/",
  },
];

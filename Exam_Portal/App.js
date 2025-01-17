const contractAddress = '0x7aBfC1D23A7163dB9f56dC867b589CB6500ee721'; // Replace with your contract address
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_examId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_questionText",
				"type": "string"
			},
			{
				"internalType": "string[4]",
				"name": "_options",
				"type": "string[4]"
			},
			{
				"internalType": "string",
				"name": "_correctAnswer",
				"type": "string"
			}
		],
		"name": "addQuestion",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			}
		],
		"name": "addStudent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_examName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalMarks",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_passingMarks",
				"type": "uint256"
			}
		],
		"name": "createExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_examId",
				"type": "uint256"
			}
		],
		"name": "deactivateExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_examId",
				"type": "uint256"
			}
		],
		"name": "registerForExam",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "examId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "examName",
				"type": "string"
			}
		],
		"name": "ExamCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "examId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "score",
				"type": "uint256"
			}
		],
		"name": "ExamResultsUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "examId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "questionId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "questionText",
				"type": "string"
			}
		],
		"name": "QuestionAdded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "examId",
				"type": "uint256"
			}
		],
		"name": "StudentRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_examId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_score",
				"type": "uint256"
			}
		],
		"name": "updateExamResults",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "examCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "examQuestions",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "questionId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "examId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "questionText",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "correctAnswer",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "exams",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "examId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "examName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalMarks",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "passingMarks",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isActive",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_examId",
				"type": "uint256"
			}
		],
		"name": "getQuestions",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "questionId",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "examId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "questionText",
						"type": "string"
					},
					{
						"internalType": "string[4]",
						"name": "options",
						"type": "string[4]"
					},
					{
						"internalType": "string",
						"name": "correctAnswer",
						"type": "string"
					}
				],
				"internalType": "struct OnlineExamPortal.Question[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_studentId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_examId",
				"type": "uint256"
			}
		],
		"name": "getStudentScore",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "questionCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "studentCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "students",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "studentId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected account:", accounts[0]);
            return accounts[0];
        } catch (error) {
            console.error("User denied account access", error);
        }
    } else {
        console.error("MetaMask is not installed");
    }
}

document.getElementById("logoutButton").onclick = function() {
	window.location.href = "index.html"; 
};

async function setupProvider() { 
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer;
}

async function checkNetwork() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    if (network.chainId !== 11155111) { // 11155111 is the Chain ID for Sepolia
        alert("Please switch to the Sepolia Test Network.");
        throw new Error("Wrong network");
    }
}

async function createExam(examName, totalMarks, passingMarks) {
    const signer = await setupProvider();
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const tx = await contract.createExam(examName, totalMarks, passingMarks);
        await tx.wait();
        alert(`Exam created: ${examName}`);
    } catch (error) {
        console.error('Error creating exam:', error);
        alert('Error creating exam. Check console for details.');
    }
}
async function deactivateExam(examId) {
    const signer = await setupProvider();
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const tx = await contract.deactivateExam(examId);
        await tx.wait();
        alert(`Exam ID ${examId} has been deactivated.`);
    } catch (error) {
        console.error('Error deactivating exam:', error);
        alert('Error deactivating exam. Check console for details.');
    }
}

async function updateExamResults(studentId, examId, score) {
    const signer = await setupProvider();
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const tx = await contract.updateExamResults(studentId, examId, score);
        await tx.wait();
        alert(`Results updated for Student ID ${studentId} in Exam ID ${examId}.`);
    } catch (error) {
        console.error('Error updating exam results:', error);
        alert('Error updating exam results. Check console for details.');
    }
}

async function getTotalStudents() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const totalStudents = await contract.studentCount();
        alert(`Total Students: ${totalStudents.toString()}`);
    } catch (error) {
        console.error('Error fetching total students:', error);
        alert('Error fetching total students. Check console for details.');
    }
}

async function getStudentInfo(studentId) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const student = await contract.students(studentId);
        alert(`Student ID: ${student.studentId}, Name: ${student.name}`);
    } catch (error) {
        console.error('Error fetching student info:', error);
        alert('Error fetching student info. Check console for details.');
    }
}
async function addQuestion(examId, questionText, options, correctAnswer) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        
        // Call the addQuestion method from the smart contract
        const tx = await contract.addQuestion(examId, questionText, options, correctAnswer);
        await tx.wait(); // Wait for the transaction to be mined

        alert('Question added successfully!');
    } catch (error) {
        console.error('Error adding question:', error);
        alert('Error adding question. Check console for details.');
    }
}


async function addStudent(name) {
    const signer = await setupProvider();
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const tx = await contract.addStudent(name);
        await tx.wait();
        alert(`Student added: ${name}`);
    } catch (error) {
        console.error('Error adding student:', error);
        alert('Error adding student. Check console for details.');
    }
}

async function registerForExam(studentId, examId) {
    const signer = await setupProvider();
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        const tx = await contract.registerForExam(studentId, examId);
        await tx.wait();
        alert(`Student ID ${studentId} registered for Exam ID ${examId}`);
    } catch (error) {
        console.error('Error registering for exam:', error);
        alert('Error registering for exam. Check console for details.');
    }
}

async function getStudentScore(studentId, examId) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    
    try {
        await checkNetwork(); // Check for Sepolia network
        const contract = new ethers.Contract(contractAddress, contractABI, provider);
        const score = await contract.getStudentScore(studentId, examId);
        document.getElementById('scoreResult').innerText = `Score: ${score.toString()}`;
    } catch (error) {
        console.error('Error fetching score:', error);
        alert('Error fetching score. Check console for details.');
    }
}

document.getElementById('connectWalletButton').addEventListener('click', connectWallet);
document.getElementById('createExamButton').addEventListener('click', () => {
    const examName = document.getElementById('examName').value;
    const totalMarks = parseInt(document.getElementById('totalMarks').value);
    const passingMarks = parseInt(document.getElementById('passingMarks').value);
    createExam(examName, totalMarks, passingMarks);
});

document.getElementById('addStudentButton').addEventListener('click', () => {
    const studentName = document.getElementById('studentName').value;
    addStudent(studentName);
});

document.getElementById('registerExamButton').addEventListener('click', () => {
    const studentId = parseInt(document.getElementById('studentId').value);
    const examId = parseInt(document.getElementById('examId').value);
    registerForExam(studentId, examId);
});

document.getElementById('getScoreButton').addEventListener('click', () => {
    const studentId = parseInt(document.getElementById('scoreStudentId').value);
    const examId = parseInt(document.getElementById('scoreExamId').value);
    getStudentScore(studentId, examId);
});
document.getElementById('deactivateExamButton').addEventListener('click', () => {
    const examId = parseInt(document.getElementById('deactivateExamId').value);
    deactivateExam(examId);
});

document.getElementById('updateResultsButton').addEventListener('click', () => {
    const studentId = parseInt(document.getElementById('updateStudentId').value);
    const examId = parseInt(document.getElementById('updateExamId').value);
    const score = parseInt(document.getElementById('updateScore').value);
    updateExamResults(studentId, examId, score);
});

document.getElementById('totalStudentsButton').addEventListener('click', getTotalStudents);
document.getElementById('getStudentInfoButton').addEventListener('click', () => {
    const studentId = parseInt(document.getElementById('studentInfoId').value);
    getStudentInfo(studentId);
});

document.getElementById("addQuestionButton").onclick = async function() {
    const examId = document.getElementById("questionExamId").value;
    const questionText = document.getElementById("questionText").value;
    const optionA = document.getElementById("optionA").value;
    const optionB = document.getElementById("optionB").value;
    const optionC = document.getElementById("optionC").value;
    const optionD = document.getElementById("optionD").value;
    const correctAnswer = document.getElementById("correctAnswer").value;

    // Call the smart contract function to add the question
    await contract.addQuestion(examId, questionText, [optionA, optionB, optionC, optionD], correctAnswer);
    alert("Question added successfully!");
};

# Mobile and Pervasive Computing - CSL 7460

## Instructor: Dr. Suchetana Chakraborty (Assistant Professor, Department of Computer Science & Engineering @ Indian Institute of Technology, Jodhpur)

## Group Members 

- Jash Patel (B18CSE040)
- Tanuj Agarwal (B18CSE056)

# Smart Farm Management 

To assist farmers with their farm management irrespective of their farm size, location and geographical factors. A one-stop solution at your fingertips covering the following domains:
- Smart Crop Recommendation System
- Crop Health Detection System
- Farm Demographics Tracker

## Steps to run locally

- Clone this repository and launch code:
    ```
    git clone https://github.com/Tanuj22/smart-farrm-management.git
    cd cdc-portal
    code .
    ```

### Backend set up
- Move to the `backend` folder
    ```
    cd backend
    ```
- Add the `new plant diseases dataset(augmented)` and `New Plant Diseases Dataset(Augmented)` folders from [dataset](https://drive.google.com/file/d/1S8TWyIRX5nP85oAzNx_U9SbXMInTtV2l/view?usp=sharing) to `new-plant-diseases-dataset` folder in `crop_health_detection` folder

- Create and activate virtual environment 
    ```
    sudo apt-get install -y python3-venv
    python3 -m venv spc_portal_venv
    source spc_portal_venv/bin/activate
    ```
- Use pip to install other dependencies from `requirements.txt`
    ```
    pip install -r requirements.txt
    ```
- Run the server 
    ```
    python main.py
    ```

### Frontend set up
- Move to the `frontend` folder
    ```
    cd frontend
    ```
- Install the dependencies
    ```
    npm install
    ```
- Start the server 
    ```
    npm start
    ```
- Open `localhost:3000`

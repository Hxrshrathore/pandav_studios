import os

def rename_files_to_sequence(folder_path):
    try:
        # Check if the folder exists
        if not os.path.exists(folder_path):
            print("The specified folder does not exist.")
            return

        # Get a list of all files in the folder
        files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        
        if not files:
            print("No files found in the folder.")
            return

        # Sort the files for consistent renaming order
        files.sort()

        # Rename files to sequential names with .jpg extension
        for index, file_name in enumerate(files, start=1):
            # New file name with .jpg extension
            new_name = f"{index}.jpg"
            
            # Get the full paths for renaming
            old_path = os.path.join(folder_path, file_name)
            new_path = os.path.join(folder_path, new_name)
            
            # Rename the file
            os.rename(old_path, new_path)
        
        print(f"Successfully renamed {len(files)} files to sequential names with .jpg extension.")
    
    except Exception as e:
        print(f"An error occurred: {e}")

# Specify the folder path
folder_path = r"C:\Users\KIIT0001\Downloads\New folder (1)\New folder\Portfolio\Birthday"

# Call the function
rename_files_to_sequence(folder_path)

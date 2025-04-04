import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgClass } from '@angular/common';///
import { ChatButtonComponent } from '../chat-button/chat-button.component';

@Component({
  selector: 'app-tools',
  imports: [ChatButtonComponent, NgClass],///
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})

export class ToolsComponent {
  apiUrl = 'http://127.0.0.1:5000/video_feed';

  @ViewChild('videoFeed', { static: false }) videoElement!: ElementRef;

  startVideo() {
    if (this.videoElement) {
      const video = this.videoElement.nativeElement as HTMLVideoElement;
      video.src = this.apiUrl;
      video.play()
        .then(() => console.log('Video streaming started.'))
        .catch(error => console.error('Error starting video:', error));
    } else {
      console.error('Video element not found!');
    }
  }


  
  selectedFiles: FileList | null = null; // Store selected files
  predictions: string[] = [];

  // Store selected files when the user picks images
  handleFileSelection(event: any) {
    this.selectedFiles = event.target.files;
    console.log("Files selected:", this.selectedFiles);
  }

  // Upload files and fetch prediction when the user clicks the button
  async uploadImages() {
    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    const predictionsContainer = document.getElementById('finalResult');
    this.predictions = []; // Reset predictions

    for (const file of Array.from(this.selectedFiles)) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('http://127.0.0.1:5001/predict', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error('Failed to connect to the API.');
        }

        const data = await response.json();
        this.predictions.push(data.predicted_class); // Store prediction

      } catch (error) {
        console.error("Error:", error);
      }
    }

    let toggle = true;
    if (predictionsContainer) {
      predictionsContainer.innerHTML = "Final Sentence: " + this.predictions.map(
        letter => `<span style="color: ${getRandomColor()}; font-size: 20px; font-weight: bold;">${letter}</span>`
      ).join("");
    }


    function getRandomColor(): string {
      toggle = !toggle;
      return toggle ? "#8d3cff" : "#6301EA";
    }



  }







}
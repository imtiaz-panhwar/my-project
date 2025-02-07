import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "ugww8xuw",      // Ensure this is set correctly
  dataset: "production",          // Ensure this is set correctly
  apiVersion:"2025-01-19",   // Ensure the API version is provided
  token: "skm8h9hS0gFGzCUozpC7gKlc2XtQna7pCNrGT0iPKLVfZYe03pg5TIhc43gXmmYJHkRkzapl2wg2EV2CzBOJVWNUxra2SBQGvclnvxcaTxWF3NTpIdPyzlBJ9cCmaCmaqoU3miJY11ZZOtNLkmQ3DJYWFde0btxybXl7XZcNV88CfmhCW1lX",              // Optional for write access
  useCdn: false,                                 // Set to false if you need to make writes or use the latest data
});

export default client;

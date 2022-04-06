<template>
  <form action="">
    <h4 class="px-5 pb-5 text-2xl font-bold">Follow Us By Subscribing</h4>
    <p>You Will Be Added to Our Mailing List</p>
    <fieldset>
      <div class="p-5">
        <label for="email" class="px-5">Email Address</label>
        <input
          type="email"
          name="email"
          required=""
          class="border rounded-md"
        />
      </div>
      <div class="mb-5">
        <input type="checkbox" name="consent" required="" class="mr-3" />
        <label for="consent"
          >By Clicking the Checkbox, You Consent to Receive Emails About
          Upcoming Offers
        </label>
      </div>
    </fieldset>
    <button
      type="submit"
      class="bg-teal-600 p-3 px-12 rounded-md text-white font-semibold hover:bg-gray-800 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-teal-800 duration-300"
    >
      SubScribe
    </button>
  </form>
</template>

<script lang="ts">
	import Saos from 'saos';
	import selfie from '$lib/components/graphics/selfie.jpg';
	import Wrapper from '$lib/components/widgets/Wrappper.svelte';
</script>

<section class="text-white">
	<div style="height: 900px; margin-top: 80px; margin-bottom: 80px;" class="d-flex">
		<div class="w-75 m-auto" style="max-width: 650px;">
			<Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
				<img class="w-50 mb-4" src={selfie} alt="Bryant" />
				<h2 id="about">Hello!</h2>
				<h3>
					{`My name is Bryant Mejia. I am from Lancaster, PA. 🏙 
					I am a passionate software engineer
					with a love for problem-solving and creating impactful solutions. I am motivated to solve
					tricky issues and collaborate with teams to deliver high quality experience for end-users`}
				</h3>
			</Saos>
		</div>
	</div>
</section>

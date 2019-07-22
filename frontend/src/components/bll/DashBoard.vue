<template>
	<div class="tab-content">
		<div class="tab-pane active" id="profile">
			<table class="table">
				<tbody>
					<tr>
						<td>
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value="" checked />
									<span class="form-check-sign">
										<span class="check"></span>
									</span>
								</label>
							</div>
						</td>
						<td>Sign contract for "What are conference organizers afraid of?"</td>
						<td class="td-actions text-right">
							<button
								type="button"
								v-b-popover.hover.top="'Edit Task!'"
								class="btn btn-primary btn-link btn-sm"
							>
								<i class="fas fa-pen"></i>
							</button>
							<button
								type="button"
								v-b-popover.hover.top="'Remove!'"
								class="btn btn-danger btn-link btn-sm"
							>
								<i class="fas fa-trash-alt" size="lg"></i>
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value="" />
									<span class="form-check-sign">
										<span class="check"></span>
									</span>
								</label>
							</div>
						</td>
						<td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
						<td class="td-actions text-right">
							<button
								type="button"
								rel="tooltip"
								title="Edit Task"
								class="btn btn-primary btn-link btn-sm"
							>
								<i class="material-icons" size="2x">edit</i>
							</button>
							<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
								<i class="material-icons">close</i>
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value="" />
									<span class="form-check-sign">
										<span class="check"></span>
									</span>
								</label>
							</div>
						</td>
						<td>
							Flooded: One year later, assessing what was lost and what was found when a ravaging rain
							swept through metro Detroit
						</td>
						<td class="td-actions text-right">
							<button
								type="button"
								rel="tooltip"
								title="Edit Task"
								class="btn btn-primary btn-link btn-sm"
							>
								<i class="material-icons">edit</i>
							</button>
							<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
								<i class="material-icons">close</i>
							</button>
						</td>
					</tr>
					<tr>
						<td>
							<div class="form-check">
								<label class="form-check-label">
									<input class="form-check-input" type="checkbox" value="" checked />
									<span class="form-check-sign">
										<span class="check"></span>
									</span>
								</label>
							</div>
						</td>
						<td>Create 4 Invisible User Experiences you Never Knew About</td>
						<td class="td-actions text-right">
							<button
								type="button"
								rel="tooltip"
								title="Edit Task"
								class="btn btn-primary btn-link btn-sm"
							>
								<i class="material-icons">edit</i>
							</button>
							<button type="button" rel="tooltip" title="Remove" class="btn btn-danger btn-link btn-sm">
								<i class="material-icons">close</i>
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="tab-pane" id="messages">
			<h1>Messages</h1>
		</div>
		<div class="tab-pane" id="settings">
			<h1>settings</h1>
		</div>
	</div>
</template>
<script>
export default {}
</script>

var global_poll_id=0,global_poll_aid=0,global_poll_aid_votes=0,count_poll_answer_new=0,count_poll_answer=3;function delete_poll(a,b,c){if(delete_poll_confirm=confirm(b))global_poll_id=a,jQuery.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_poll+"&pollq_id="+a+"&action=polls-admin&_ajax_nonce="+c,cache:!1,success:function(a){jQuery("#message").html(a);jQuery("#message").show();jQuery("#poll-"+global_poll_id).remove()}})}
function delete_poll_logs(a,b){(delete_poll_logs_confirm=confirm(a))&&(jQuery("#delete_logs_yes").is(":checked")?jQuery.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_all_logs+"&delete_logs_yes=yes&action=polls-admin&_ajax_nonce="+b,cache:!1,success:function(a){jQuery("#message").html(a);jQuery("#message").show();jQuery("#poll_logs").html(pollsAdminL10n.text_no_poll_logs)}}):alert(pollsAdminL10n.text_checkbox_delete_all_logs))}
function delete_this_poll_logs(a,b,c){if(delete_poll_logs_confirm=confirm(b))jQuery("#delete_logs_yes").is(":checked")?(global_poll_id=a,jQuery.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_poll_logs+"&pollq_id="+a+"&delete_logs_yes=yes&action=polls-admin&_ajax_nonce="+c,cache:!1,success:function(a){jQuery("#message").html(a);jQuery("#message").show();jQuery("#poll_logs").html(pollsAdminL10n.text_no_poll_logs);jQuery("#poll_logs_display").hide();jQuery("#poll_logs_display_none").show()}})):
alert(pollsAdminL10n.text_checkbox_delete_poll_logs)}
function delete_poll_ans(a,b,c,d,e){if(delete_poll_ans_confirm=confirm(d))global_poll_id=a,global_poll_aid=b,global_poll_aid_votes=c,temp_vote_count=0,jQuery.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_delete_poll_ans+"&pollq_id="+a+"&polla_aid="+b+"&action=polls-admin&_ajax_nonce="+e,cache:!1,success:function(a){jQuery("#message").html(a);jQuery("#message").show();jQuery("#poll_total_votes").html(parseInt(jQuery("#poll_total_votes").html())-parseInt(global_poll_aid_votes));
jQuery("#pollq_totalvotes").val(temp_vote_count);jQuery("#poll-answer-"+global_poll_aid).remove();check_totalvotes();reorder_answer_num()}})}
function opening_poll(a,b,c){if(open_poll_confirm=confirm(b))global_poll_id=a,jQuery.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_open_poll+"&pollq_id="+a+"&action=polls-admin&_ajax_nonce="+c,cache:!1,success:function(a){jQuery("#message").html(a);jQuery("#message").show();jQuery("#open_poll").hide();jQuery("#close_poll").show()}})}
function closing_poll(a,b,c){if(close_poll_confirm=confirm(b))global_poll_id=a,jQuery.ajax({type:"POST",url:pollsAdminL10n.admin_ajax_url,data:"do="+pollsAdminL10n.text_close_poll+"&pollq_id="+a+"&action=polls-admin&_ajax_nonce="+c,cache:!1,success:function(a){jQuery("#message").html(a);jQuery("#message").show();jQuery("#open_poll").show();jQuery("#close_poll").hide()}})}
function reorder_answer_num(){jQuery("#pollq_multiple").empty();jQuery("#poll_answers tr > th").each(function(a){jQuery(this).text(pollsAdminL10n.text_answer+" "+(a+1));jQuery("#pollq_multiple").append('<option value="'+(a+1)+'">'+(a+1)+"</option>")})}
function check_totalvotes(){temp_vote_count=0;jQuery("#poll_answers tr td input[size=4]").each(function(){temp_vote_count=isNaN(jQuery(this).val())?temp_vote_count+0:temp_vote_count+parseInt(jQuery(this).val())});jQuery("#pollq_totalvotes").val(temp_vote_count)}
function add_poll_answer_add(){jQuery("#poll_answers").append('<tr id="poll-answer-'+count_poll_answer+'"><th width="20%" scope="row" valign="top"></th><td width="80%"><input type="text" size="50" maxlength="200" name="polla_answers[]" />&nbsp;&nbsp;&nbsp;<input type="button" value="'+pollsAdminL10n.text_remove_poll_answer+'" onclick="remove_poll_answer_add('+count_poll_answer+');" class="button" /></td></tr>');count_poll_answer++;reorder_answer_num()}
function remove_poll_answer_add(a){jQuery("#poll-answer-"+a).remove();reorder_answer_num()}
function add_poll_answer_edit(){jQuery("#poll_answers").append('<tr id="poll-answer-new-'+count_poll_answer_new+'"><th width="20%" scope="row" valign="top"></th><td width="60%"><input type="text" size="50" maxlength="200" name="polla_answers_new[]" />&nbsp;&nbsp;&nbsp;<input type="button" value="'+pollsAdminL10n.text_remove_poll_answer+'" onclick="remove_poll_answer_edit('+count_poll_answer_new+');" class="button" /></td><td width="20%" align="'+pollsAdminL10n.text_direction+'">0 <input type="text" size="4" name="polla_answers_new_votes[]" value="0" onblur="check_totalvotes();" /></td></tr>');
count_poll_answer_new++;reorder_answer_num()}function remove_poll_answer_edit(a){jQuery("#poll-answer-new-"+a).remove();check_totalvotes();reorder_answer_num()}function check_pollq_multiple(){1==parseInt(jQuery("#pollq_multiple_yes").val())?jQuery("#pollq_multiple").attr("disabled",!1):(jQuery("#pollq_multiple").val(1),jQuery("#pollq_multiple").attr("disabled",!0))}
function check_polltimestamp(){jQuery("#edit_polltimestamp").is(":checked")?jQuery("#pollq_timestamp").show():jQuery("#pollq_timestamp").hide()}function check_pollexpiry(){jQuery("#pollq_expiry_no").is(":checked")?jQuery("#pollq_expiry").hide():jQuery("#pollq_expiry").show()};